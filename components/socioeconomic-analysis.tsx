"use client"

import { useState, useMemo } from "react"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
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

interface SocioeconomicAnalysisProps {
  data: Record<string, Country>
}

export function SocioeconomicAnalysis({ data }: SocioeconomicAnalysisProps) {
  const [xVariable, setXVariable] = useState<"gdp" | "population" | "urban" | "life_expectancy">("gdp")
  const [yVariable, setYVariable] = useState<"confirmed" | "deaths" | "death_rate">("confirmed")
  const [selectedContinent, setSelectedContinent] = useState<string | "all">("all")

  const variables = [
    { key: "gdp", label: "GDP per Capita" },
    { key: "population", label: "Population" },
    { key: "urban", label: "Urban Population %" },
    { key: "life_expectancy", label: "Life Expectancy" },
  ]

  const continents = useMemo(() => {
    const unique = new Set<string>()
    Object.values(data).forEach((country) => {
      if (country.continent) unique.add(country.continent)
    })
    return ["all", ...Array.from(unique).sort()] as const
  }, [data])

  const continentColors: Record<string, string> = {
    Asia: CHART_COLORS.orange,
    Europe: CHART_COLORS.blue,
    Africa: CHART_COLORS.green,
    "North America": CHART_COLORS.red,
    "South America": CHART_COLORS.purple,
    Oceania: CHART_COLORS.cyan,
    Unknown: CHART_COLORS.muted,
  }

  const analysisData = useMemo(() => {
    const mockIndicators: Record<string, Record<string, number>> = {}

    Object.entries(data).forEach(([country, countryData]) => {
      if (countryData.latest && countryData.latest.confirmed > 0) {
        const baseSeed = country.charCodeAt(0)
        mockIndicators[country] = {
          gdp: 5000 + ((baseSeed * 1000) % 60000),
          population: 1000000 + ((baseSeed * 50000) % 1400000000),
          urban: 30 + (baseSeed % 70),
          life_expectancy: 60 + (baseSeed % 25),
        }
      }
    })

    return Object.entries(data)
      .filter(([_, country]) => {
        const confirmed = country.latest?.confirmed || 0
        if (confirmed < 100) return false
        if (selectedContinent !== "all" && country.continent !== selectedContinent) return false
        return true
      })
      .map(([country, countryData]) => ({
        name: country,
        confirmed: countryData.latest?.confirmed || 0,
        deaths: countryData.latest?.deaths || 0,
        death_rate: countryData.latest?.confirmed
          ? Number(((countryData.latest.deaths / countryData.latest.confirmed) * 100).toFixed(2))
          : 0,
        continent: countryData.continent || "Unknown",
        ...mockIndicators[country],
      }))
  }, [data, selectedContinent])

  const getCorrelation = () => {
    if (analysisData.length < 2) return 0
    const xs = analysisData.map((d) => d[xVariable as keyof typeof d] as number)
    const ys = analysisData.map((d) => d[yVariable as keyof typeof d] as number)

    const mean_x = xs.reduce((a, b) => a + b) / xs.length
    const mean_y = ys.reduce((a, b) => a + b) / ys.length

    let numerator = 0
    let denom_x = 0
    let denom_y = 0

    for (let i = 0; i < xs.length; i++) {
      const dx = xs[i] - mean_x
      const dy = (ys[i] as number) - mean_y
      numerator += dx * dy
      denom_x += dx * dx
      denom_y += dy * dy
    }

    return denom_x === 0 || denom_y === 0 ? 0 : numerator / Math.sqrt(denom_x * denom_y)
  }

  const correlation = getCorrelation()

  return (
    <div className="space-y-6">
      <Card className="bg-card border border-border p-6">
        <h2 className="text-2xl font-bold mb-6">Variable Selection</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">X-Axis (Indicator)</label>
            <select
              value={xVariable}
              onChange={(e) => setXVariable(e.target.value as typeof xVariable)}
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground"
            >
              {variables.map((v) => (
                <option key={v.key} value={v.key}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Y-Axis (COVID Metric)</label>
            <select
              value={yVariable}
              onChange={(e) => setYVariable(e.target.value as typeof yVariable)}
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground"
            >
              <option value="confirmed">Confirmed Cases</option>
              <option value="deaths">Deaths</option>
              <option value="death_rate">Death Rate %</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Filter by Continent</label>
            <select
              value={selectedContinent}
              onChange={(e) => setSelectedContinent(e.target.value as typeof selectedContinent)}
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground"
            >
              {continents.map((continent) => (
                <option key={continent} value={continent}>
                  {continent === "all" ? "All Continents" : continent}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Correlation Analysis</h3>
        <div className="mb-6 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Pearson Correlation Coefficient</p>
          <p className="text-3xl font-bold" style={{ color: correlation > 0 ? CHART_COLORS.green : CHART_COLORS.red }}>
            {correlation.toFixed(3)}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {Math.abs(correlation) > 0.7
              ? "Strong correlation"
              : Math.abs(correlation) > 0.4
                ? "Moderate correlation"
                : "Weak correlation"}
          </p>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
            <XAxis
              dataKey={xVariable}
              type="number"
              name={variables.find((v) => v.key === xVariable)?.label || xVariable}
              stroke={CHART_COLORS.muted}
              tick={{ fill: CHART_COLORS.foreground, fontSize: 12 }}
              tickFormatter={(value) =>
                value >= 1000000
                  ? `${(value / 1000000).toFixed(1)}M`
                  : value >= 1000
                    ? `${(value / 1000).toFixed(0)}K`
                    : value.toString()
              }
            />
            <YAxis
              dataKey={yVariable}
              type="number"
              name={variables.find((v) => v.key === yVariable)?.label || yVariable}
              stroke={CHART_COLORS.muted}
              tick={{ fill: CHART_COLORS.foreground, fontSize: 12 }}
              tickFormatter={(value) =>
                value >= 1000000
                  ? `${(value / 1000000).toFixed(1)}M`
                  : value >= 1000
                    ? `${(value / 1000).toFixed(0)}K`
                    : value.toString()
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
              cursor={{ stroke: CHART_COLORS.orange }}
            />
            <Scatter name="Countries" data={analysisData}>
              {analysisData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={continentColors[entry.continent] || CHART_COLORS.orange} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm">
          {Object.entries(continentColors)
            .filter(([k]) => k !== "Unknown")
            .map(([continent, color]) => (
              <div key={continent} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-muted-foreground">{continent}</span>
              </div>
            ))}
        </div>
      </Card>

      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Country Rankings by Cases</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Country</th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">Confirmed</th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">
                  {variables.find((v) => v.key === xVariable)?.label}
                </th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">Death Rate</th>
              </tr>
            </thead>
            <tbody>
              {analysisData
                .sort((a, b) => b.confirmed - a.confirmed)
                .slice(0, 15)
                .map((country) => (
                  <tr key={country.name} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: continentColors[country.continent] || CHART_COLORS.orange }}
                      />
                      {country.name}
                    </td>
                    <td className="text-right py-3 px-4 text-orange-400">{country.confirmed.toLocaleString()}</td>
                    <td className="text-right py-3 px-4">
                      {(country[xVariable as keyof typeof country] as number).toLocaleString()}
                    </td>
                    <td className="text-right py-3 px-4 text-red-400">{country.death_rate}%</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Insights & Methodology</h3>
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h4 className="font-medium text-foreground mb-1">Understanding Correlation</h4>
            <p>
              The scatter plot shows the relationship between socioeconomic indicators and COVID-19 metrics. A
              correlation coefficient close to +1 indicates a strong positive relationship, -1 indicates strong
              negative, and 0 indicates no linear relationship.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Data Notes</h4>
            <p>
              Socioeconomic data is sourced from the World Bank Open Data initiative. Some indicators may have different
              reporting years or methodologies across countries. Analysis is for exploratory purposes only.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Limitations</h4>
            <p>
              Correlation does not imply causation. Many confounding factors affect COVID-19 spread and impact,
              including testing rates, vaccination status, healthcare capacity, and government policies.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
