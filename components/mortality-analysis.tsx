"use client"

import { useState, useMemo } from "react"
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts"
import { Card } from "@/components/ui/card"
import { CHART_COLORS } from "@/lib/chart-colors"

interface Country {
  latest?: {
    confirmed: number
    deaths: number
    recovered: number
    active: number
  }
  continent?: string
}

interface MortalityAnalysisProps {
  data: Record<string, Country>
}

export function MortalityAnalysis({ data }: MortalityAnalysisProps) {
  const [selectedContinent, setSelectedContinent] = useState<string | "all">("all")
  const [minCases, setMinCases] = useState(1000)

  const continents = useMemo(() => {
    const unique = new Set<string>()
    Object.values(data).forEach((country) => {
      if (country.continent) unique.add(country.continent)
    })
    return Array.from(unique).sort()
  }, [data])

  const mortalityData = useMemo(() => {
    return Object.entries(data)
      .filter(([_, country]) => {
        const confirmed = country.latest?.confirmed || 0
        if (confirmed < minCases) return false
        if (selectedContinent !== "all" && country.continent !== selectedContinent) return false
        return true
      })
      .map(([name, country]) => ({
        name,
        confirmed: country.latest?.confirmed || 0,
        deaths: country.latest?.deaths || 0,
        deathRate: country.latest?.confirmed
          ? Number(((country.latest.deaths / country.latest.confirmed) * 100).toFixed(2))
          : 0,
        continent: country.continent || "Unknown",
      }))
      .sort((a, b) => b.deathRate - a.deathRate)
      .slice(0, 20)
  }, [data, selectedContinent, minCases])

  const getBarColor = (deathRate: number) => {
    if (deathRate >= 4) return CHART_COLORS.red
    if (deathRate >= 2) return CHART_COLORS.yellow
    return CHART_COLORS.green
  }

  return (
    <div className="space-y-6">
      <Card className="bg-card border border-border p-6">
        <h2 className="text-2xl font-bold mb-6">Mortality Analysis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Filter by Continent</label>
            <select
              value={selectedContinent}
              onChange={(e) => setSelectedContinent(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground"
            >
              <option value="all">All Continents</option>
              {continents.map((continent) => (
                <option key={continent} value={continent}>
                  {continent}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Minimum Cases: {minCases.toLocaleString()}</label>
            <input
              type="range"
              min="100"
              max="100000"
              step="1000"
              value={minCases}
              onChange={(e) => setMinCases(Number.parseInt(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
        </div>
      </Card>

      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Death Rate Rankings</h3>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={mortalityData} layout="vertical" margin={{ left: 100, right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} horizontal={true} vertical={false} />
            <XAxis
              type="number"
              stroke={CHART_COLORS.muted}
              tick={{ fill: CHART_COLORS.foreground, fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis
              dataKey="name"
              type="category"
              stroke={CHART_COLORS.muted}
              tick={{ fill: CHART_COLORS.foreground, fontSize: 12 }}
              width={90}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: CHART_COLORS.card,
                border: `1px solid ${CHART_COLORS.border}`,
                borderRadius: "8px",
                color: CHART_COLORS.foreground,
              }}
              labelStyle={{ color: CHART_COLORS.foreground, fontWeight: "bold" }}
              formatter={(value: number) => [`${value.toFixed(2)}%`, "Death Rate"]}
            />
            <Bar dataKey="deathRate" name="Death Rate %" radius={[0, 4, 4, 0]}>
              {mortalityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.deathRate)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded" style={{ backgroundColor: CHART_COLORS.green }} />
            <span className="text-muted-foreground">Low (&lt;2%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded" style={{ backgroundColor: CHART_COLORS.yellow }} />
            <span className="text-muted-foreground">Medium (2-4%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded" style={{ backgroundColor: CHART_COLORS.red }} />
            <span className="text-muted-foreground">High (&gt;4%)</span>
          </div>
        </div>
      </Card>

      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Deaths vs Confirmed Cases</h3>
        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
            <XAxis
              dataKey="confirmed"
              type="number"
              name="Confirmed"
              stroke={CHART_COLORS.muted}
              tick={{ fill: CHART_COLORS.foreground, fontSize: 12 }}
              tickFormatter={(value) =>
                value >= 1000000
                  ? `${(value / 1000000).toFixed(1)}M`
                  : value >= 1000
                    ? `${(value / 1000).toFixed(0)}K`
                    : value
              }
            />
            <YAxis
              dataKey="deaths"
              type="number"
              name="Deaths"
              stroke={CHART_COLORS.muted}
              tick={{ fill: CHART_COLORS.foreground, fontSize: 12 }}
              tickFormatter={(value) =>
                value >= 1000000
                  ? `${(value / 1000000).toFixed(1)}M`
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
              labelStyle={{ color: CHART_COLORS.foreground }}
              formatter={(value: number, name: string) => [value.toLocaleString(), name]}
              cursor={{ stroke: CHART_COLORS.orange, strokeWidth: 1 }}
            />
            <Scatter name="Countries" data={mortalityData} fill={CHART_COLORS.orange}>
              {mortalityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.deathRate)} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
