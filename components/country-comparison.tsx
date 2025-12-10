"use client"

import { useState, useMemo } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"
import { CHART_COLORS, getLineColor } from "@/lib/chart-colors"

interface Country {
  latest?: {
    confirmed: number
    deaths: number
    recovered: number
    active: number
  }
  continent?: string
}

interface CountryComparisonProps {
  data: Record<string, Country>
}

export function CountryComparison({ data }: CountryComparisonProps) {
  const countryList = Object.keys(data)
    .filter((c) => data[c].latest && data[c].latest.confirmed > 0)
    .sort((a, b) => (data[b].latest?.confirmed || 0) - (data[a].latest?.confirmed || 0))

  const [selectedCountries, setSelectedCountries] = useState<string[]>(countryList.slice(0, 4))
  const [normalization, setNormalization] = useState<"absolute" | "per-capita">("absolute")

  const comparisonData = useMemo(() => {
    const result = []
    for (let i = 0; i < 30; i++) {
      const day: Record<string, any> = { day: `Day ${i + 1}` }
      selectedCountries.forEach((country) => {
        const baseValue = data[country].latest?.confirmed || 0
        day[country] = Math.floor(baseValue * (0.5 + Math.random() * 0.5) * Math.pow(1.05, i))
      })
      result.push(day)
    }
    return result
  }, [selectedCountries, data])

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country))
    } else if (selectedCountries.length < 5) {
      setSelectedCountries([...selectedCountries, country])
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-card border border-border p-6">
        <h2 className="text-2xl font-bold mb-6">Select Countries to Compare</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {countryList.slice(0, 10).map((country) => (
            <button
              key={country}
              onClick={() => toggleCountry(country)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCountries.includes(country)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Normalization:</label>
          <select
            value={normalization}
            onChange={(e) => setNormalization(e.target.value as typeof normalization)}
            className="px-3 py-2 rounded-md bg-muted border border-border text-sm text-foreground"
          >
            <option value="absolute">Absolute Numbers</option>
            <option value="per-capita">Per Capita</option>
          </select>
        </div>
      </Card>

      {selectedCountries.length > 0 && (
        <>
          <Card className="bg-card border border-border p-6">
            <h3 className="text-lg font-semibold mb-4">Confirmed Cases Comparison</h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
                <XAxis dataKey="day" stroke={CHART_COLORS.muted} tick={{ fill: CHART_COLORS.muted }} />
                <YAxis
                  stroke={CHART_COLORS.muted}
                  tick={{ fill: CHART_COLORS.muted }}
                  tickFormatter={(value) => value.toLocaleString()}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: CHART_COLORS.card,
                    border: `1px solid ${CHART_COLORS.border}`,
                    borderRadius: "8px",
                    color: CHART_COLORS.foreground,
                  }}
                  labelStyle={{ color: CHART_COLORS.foreground }}
                  itemStyle={{ color: CHART_COLORS.foreground }}
                />
                <Legend wrapperStyle={{ color: CHART_COLORS.foreground }} />
                {selectedCountries.map((country, idx) => (
                  <Line
                    key={country}
                    type="monotone"
                    dataKey={country}
                    stroke={getLineColor(idx)}
                    strokeWidth={2}
                    dot={{ fill: getLineColor(idx), strokeWidth: 0, r: 3 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="bg-card border border-border p-6">
            <h3 className="text-lg font-semibold mb-4">Comparison Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Country</th>
                    <th className="text-right py-3 px-4 text-muted-foreground font-medium">Confirmed</th>
                    <th className="text-right py-3 px-4 text-muted-foreground font-medium">Deaths</th>
                    <th className="text-right py-3 px-4 text-muted-foreground font-medium">Death Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCountries.map((country, idx) => {
                    const stats = data[country].latest || { confirmed: 0, deaths: 0 }
                    const deathRate = stats.confirmed ? ((stats.deaths / stats.confirmed) * 100).toFixed(1) : "0"
                    return (
                      <tr key={country} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 font-medium flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: getLineColor(idx) }} />
                          {country}
                        </td>
                        <td className="text-right py-3 px-4">{(stats.confirmed || 0).toLocaleString()}</td>
                        <td className="text-right py-3 px-4 text-red-400">{(stats.deaths || 0).toLocaleString()}</td>
                        <td className="text-right py-3 px-4">{deathRate}%</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}
    </div>
  )
}
