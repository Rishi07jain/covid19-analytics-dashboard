"use client"

import { useMemo } from "react"

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

interface WorldMapProps {
  data: Record<string, Country>
}

export function WorldMap({ data }: WorldMapProps) {
  const countries = useMemo(() => {
    return Object.entries(data)
      .filter(([countryKey, country]) => country.latest && country.latest.confirmed > 0)
      .sort(([countryKeyA, a], [countryKeyB, b]) => (b.latest?.confirmed || 0) - (a.latest?.confirmed || 0))
      .slice(0, 20)
  }, [data])

  const maxConfirmed = Math.max(...Object.values(data).map((c) => c.latest?.confirmed || 0))

  return (
    <div className="w-full bg-muted/30 rounded-lg p-8">
      <div className="text-center mb-8">
        <p className="text-muted-foreground mb-2">Showing top 20 countries by confirmed cases</p>
        <p className="text-sm text-muted-foreground">Click any country to view detailed analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {countries.map(([countryKey, stats]) => {
          const percentage = ((stats.latest?.confirmed || 0) / maxConfirmed) * 100
          const deathRate = stats.latest?.confirmed
            ? ((stats.latest.deaths / stats.latest.confirmed) * 100).toFixed(1)
            : 0

          return (
            <div
              key={countryKey}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 cursor-pointer transition-colors"
            >
              <h3 className="font-semibold text-sm mb-3">{countryKey}</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cases:</span>
                  <span className="font-medium">{(stats.latest?.confirmed || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deaths:</span>
                  <span className="font-medium text-destructive">{(stats.latest?.deaths || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Death Rate:</span>
                  <span className="font-medium">{deathRate}%</span>
                </div>
                <div className="mt-3 bg-muted rounded h-1.5">
                  <div className="bg-primary h-full rounded transition-all" style={{ width: `${percentage}%` }} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-xs text-muted-foreground mt-6 text-center">
        Hover over countries to see more details. Full interactive map coming soon.
      </p>
    </div>
  )
}
