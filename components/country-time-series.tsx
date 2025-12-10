"use client"

import { useMemo } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import { Card } from "@/components/ui/card"
import { CHART_COLORS } from "@/lib/chart-colors"

interface CountryTimeSeriesProps {
  countryData: any
}

export function CountryTimeSeries({ countryData }: CountryTimeSeriesProps) {
  const chartData = useMemo(() => {
    const result = []
    if (countryData.dates && countryData.confirmed && countryData.deaths && countryData.recovered) {
      for (let i = 0; i < countryData.dates.length; i++) {
        result.push({
          date: new Date(countryData.dates[i]).toLocaleDateString(),
          confirmed: countryData.confirmed[i] || 0,
          deaths: countryData.deaths[i] || 0,
          recovered: countryData.recovered[i] || 0,
          active: Math.max(
            0,
            (countryData.confirmed[i] || 0) - (countryData.deaths[i] || 0) - (countryData.recovered[i] || 0),
          ),
        })
      }
    }
    return result
  }, [countryData])

  return (
    <div className="space-y-6">
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Cumulative Cases Over Time</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
            <XAxis dataKey="date" stroke={CHART_COLORS.muted} tick={{ fill: CHART_COLORS.muted, fontSize: 11 }} />
            <YAxis
              stroke={CHART_COLORS.muted}
              tick={{ fill: CHART_COLORS.muted }}
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
              formatter={(value: number) => value.toLocaleString()}
            />
            <Legend wrapperStyle={{ color: CHART_COLORS.foreground }} />
            <Line
              type="monotone"
              dataKey="confirmed"
              stroke={CHART_COLORS.orange}
              name="Confirmed"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="deaths"
              stroke={CHART_COLORS.red}
              name="Deaths"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="recovered"
              stroke={CHART_COLORS.green}
              name="Recovered"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Active Cases Over Time</h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
            <XAxis dataKey="date" stroke={CHART_COLORS.muted} tick={{ fill: CHART_COLORS.muted, fontSize: 11 }} />
            <YAxis
              stroke={CHART_COLORS.muted}
              tick={{ fill: CHART_COLORS.muted }}
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
              formatter={(value: number) => value.toLocaleString()}
            />
            <Legend wrapperStyle={{ color: CHART_COLORS.foreground }} />
            <Area
              type="monotone"
              dataKey="active"
              stroke={CHART_COLORS.blue}
              fill={CHART_COLORS.blue}
              fillOpacity={0.3}
              name="Active Cases"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
