"use client"

import { useState, useMemo } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  Cell,
  Legend,
} from "recharts"
import { Card } from "@/components/ui/card"
import { CHART_COLORS } from "@/lib/chart-colors"

interface Country {
  confirmed: number
  deaths: number
  recovered: number
  active: number
  lat: number
  lon: number
  latest?: {
    confirmed: number
    deaths: number
    recovered: number
    active: number
  }
  continent?: string
}

interface ChoroplethMapProps {
  data: Record<string, Country>
  onCountrySelect?: (country: string) => void
}

export function ChoroplethMap({ data, onCountrySelect }: ChoroplethMapProps) {
  const [sortBy, setSortBy] = useState<"cases" | "deaths">("cases")

  const processedData = useMemo(() => {
    return Object.entries(data)
      .filter(([_, country]) => country.latest && country.latest.confirmed > 0)
      .map(([name, country]) => ({
        name,
        confirmed: country.latest?.confirmed || 0,
        deaths: country.latest?.deaths || 0,
        recovered: country.latest?.recovered || 0,
        active: country.latest?.active || 0,
        lat: country.lat,
        lon: country.lon,
        continent: country.continent || "Unknown",
      }))
      .sort((a, b) => {
        if (sortBy === "cases") return b.confirmed - a.confirmed
        if (sortBy === "deaths") return b.deaths - a.deaths
        return 0
      })
      .slice(0, 30)
  }, [data, sortBy])

  const continentData = useMemo(() => {
    const continents: Record<string, { confirmed: number; deaths: number; countries: number }> = {}
    Object.values(data).forEach((country) => {
      if (country.latest && country.continent) {
        if (!continents[country.continent]) {
          continents[country.continent] = { confirmed: 0, deaths: 0, countries: 0 }
        }
        continents[country.continent].confirmed += country.latest.confirmed
        continents[country.continent].deaths += country.latest.deaths
        continents[country.continent].countries += 1
      }
    })
    return Object.entries(continents)
      .map(([name, stats]) => ({
        name,
        ...stats,
      }))
      .sort((a, b) => b.confirmed - a.confirmed)
  }, [data])

  return (
    <div className="space-y-6">
      {/* Continent Overview */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Cases by Continent</h3>
        <Card className="bg-card border border-border p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={continentData}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
              <XAxis
                dataKey="name"
                stroke={CHART_COLORS.muted}
                tick={{ fill: CHART_COLORS.foreground, fontSize: 12 }}
              />
              <YAxis
                stroke={CHART_COLORS.muted}
                tick={{ fill: CHART_COLORS.foreground, fontSize: 12 }}
                tickFormatter={(value) =>
                  value >= 1000000
                    ? `${(value / 1000000).toFixed(0)}M`
                    : value >= 1000
                      ? `${(value / 1000).toFixed(0)}K`
                      : value
                }
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: CHART_COLORS.card,
                  border: `1px solid ${CHART_COLORS.border}`,
                  borderRadius: "8px",
                  color: CHART_COLORS.foreground,
                }}
                labelStyle={{ color: CHART_COLORS.foreground, fontWeight: "bold" }}
                formatter={(value: number) => value.toLocaleString()}
              />
              <Legend wrapperStyle={{ color: CHART_COLORS.foreground }} />
              <Bar dataKey="confirmed" fill={CHART_COLORS.orange} name="Confirmed" radius={[4, 4, 0, 0]} />
              <Bar dataKey="deaths" fill={CHART_COLORS.red} name="Deaths" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Country Rankings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Country Rankings</h3>
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-3 py-2 rounded-md bg-muted border border-border text-sm text-foreground"
            >
              <option value="cases">Sort by Cases</option>
              <option value="deaths">Sort by Deaths</option>
            </select>
          </div>
        </div>
        <Card className="bg-card border border-border p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Rank</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Country</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Confirmed</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Deaths</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Recovered</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Death Rate</th>
                </tr>
              </thead>
              <tbody>
                {processedData.map((country, idx) => {
                  const deathRate = ((country.deaths / country.confirmed) * 100).toFixed(1)
                  return (
                    <tr
                      key={country.name}
                      className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors"
                      onClick={() => onCountrySelect?.(country.name)}
                    >
                      <td className="py-3 px-4 text-muted-foreground">{idx + 1}</td>
                      <td className="py-3 px-4 font-medium">{country.name}</td>
                      <td className="text-right py-3 px-4 text-orange-400">{country.confirmed.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 text-red-400">{country.deaths.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 text-green-400">{country.recovered.toLocaleString()}</td>
                      <td className="text-right py-3 px-4">{deathRate}%</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Geographic Scatter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Geographic Distribution</h3>
        <Card className="bg-card border border-border p-6">
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
              <XAxis
                dataKey="lon"
                type="number"
                name="Longitude"
                stroke={CHART_COLORS.muted}
                tick={{ fill: CHART_COLORS.foreground }}
                domain={[-180, 180]}
              />
              <YAxis
                dataKey="lat"
                type="number"
                name="Latitude"
                stroke={CHART_COLORS.muted}
                tick={{ fill: CHART_COLORS.foreground }}
                domain={[-90, 90]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: CHART_COLORS.card,
                  border: `1px solid ${CHART_COLORS.border}`,
                  borderRadius: "8px",
                  color: CHART_COLORS.foreground,
                }}
                labelStyle={{ color: CHART_COLORS.foreground }}
                formatter={(value: number, name: string, props: any) => {
                  if (name === "Longitude" || name === "Latitude") return [value.toFixed(2), name]
                  return [value.toLocaleString(), name]
                }}
                cursor={{ stroke: CHART_COLORS.orange }}
              />
              <Scatter name="Countries" data={processedData} fill={CHART_COLORS.orange}>
                {processedData.map((entry, index) => {
                  // Color by case severity
                  const color =
                    entry.confirmed > 10000000
                      ? CHART_COLORS.red
                      : entry.confirmed > 1000000
                        ? CHART_COLORS.yellow
                        : CHART_COLORS.green
                  return <Cell key={`cell-${index}`} fill={color} />
                })}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.green }} />
              <span className="text-muted-foreground">&lt;1M cases</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.yellow }} />
              <span className="text-muted-foreground">1M-10M cases</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.red }} />
              <span className="text-muted-foreground">&gt;10M cases</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
