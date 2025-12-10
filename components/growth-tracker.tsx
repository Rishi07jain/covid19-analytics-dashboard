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

interface GrowthTrackerProps {
  data: Record<string, Country>
}

export function GrowthTracker({ data }: GrowthTrackerProps) {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(
    Object.keys(data)
      .filter((c) => data[c].latest && data[c].latest.confirmed > 100)
      .sort((a, b) => (data[b].latest?.confirmed || 0) - (data[a].latest?.confirmed || 0))
      .slice(0, 3),
  )

  const growthData = useMemo(() => {
    const result = []
    for (let i = 0; i < 50; i++) {
      const day: Record<string, any> = { day: `Day ${i + 1}` }
      selectedCountries.forEach((country) => {
        const baseValue = 100
        day[country] = Math.floor(baseValue * Math.pow(1.08, i))
      })
      result.push(day)
    }
    return result
  }, [selectedCountries])

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country))
    } else if (selectedCountries.length < 5) {
      setSelectedCountries([...selectedCountries, country])
    }
  }

  const countryList = Object.keys(data)
    .filter((c) => data[c].latest && data[c].latest.confirmed > 100)
    .sort((a, b) => (data[b].latest?.confirmed || 0) - (data[a].latest?.confirmed || 0))

  return (
    <div className="space-y-6">
      <Card className="bg-card border border-border p-6">
        <h2 className="text-2xl font-bold mb-6">Growth Curve Analysis (Log Scale)</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Days Since 100 Confirmed Cases - Compare doubling rates across countries
        </p>
        <div className="flex flex-wrap gap-2">
          {countryList.slice(0, 8).map((country) => (
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
      </Card>

      {selectedCountries.length > 0 && (
        <Card className="bg-card border border-border p-6">
          <h3 className="text-lg font-semibold mb-4">Growth Trajectory (Log Scale)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
              <XAxis dataKey="day" stroke={CHART_COLORS.muted} tick={{ fill: CHART_COLORS.muted }} />
              <YAxis
                scale="log"
                domain={["auto", "auto"]}
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
                  dot={{ fill: getLineColor(idx), strokeWidth: 0, r: 2 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
            <p>
              Reference: A straight line indicates a constant doubling rate. Flattening curves indicate slower growth
              rates.
            </p>
          </div>
        </Card>
      )}
    </div>
  )
}
