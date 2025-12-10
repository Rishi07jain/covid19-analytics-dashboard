"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { StatCard } from "@/components/stat-card"
import { Loader, ArrowLeft, AlertCircle } from "lucide-react"
import Link from "next/link"
import { CountryTimeSeries } from "@/components/country-time-series"
import { fetchCovidData } from "@/lib/covid-data"

interface CovidData {
  country_data: Record<string, any>
  last_updated: string
}

export default function CountryPage() {
  const params = useParams()
  const countryName = decodeURIComponent(params.name as string)
  const [data, setData] = useState<CovidData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const covidData = await fetchCovidData()

      if (!covidData || !covidData.country_data) {
        setError("Unable to load COVID-19 data.")
        setLoading(false)
        return
      }

      setData(covidData)
      setLoading(false)
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const countryData = data?.country_data[countryName]

  if (!countryData) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <Card className="bg-card border border-border p-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-destructive">Country Not Found</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {error ? error : `Country data not found: ${countryName}`}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  const latest = countryData.latest || {}
  const deathRate = latest.confirmed ? ((latest.deaths / latest.confirmed) * 100).toFixed(1) : 0
  const recoveryRate = latest.confirmed ? ((latest.recovered / latest.confirmed) * 100).toFixed(1) : 0

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold">{countryName}</h1>
          <p className="text-muted-foreground mt-2">{countryData.continent || "Unknown Region"}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Statistics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Confirmed" value={latest.confirmed || 0} color="bg-chart-1" icon="📊" />
            <StatCard label="Deaths" value={latest.deaths || 0} color="bg-destructive" icon="⚠️" />
            <StatCard label="Recovered" value={latest.recovered || 0} color="bg-chart-3" icon="✓" />
            <StatCard label="Active" value={latest.active || 0} color="bg-accent" icon="🔴" />
          </div>
        </section>

        {/* Rates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-card border border-border p-6">
              <p className="text-muted-foreground text-sm">Death Rate</p>
              <p className="text-3xl font-bold mt-2 text-destructive">{deathRate}%</p>
            </Card>
            <Card className="bg-card border border-border p-6">
              <p className="text-muted-foreground text-sm">Recovery Rate</p>
              <p className="text-3xl font-bold mt-2 text-chart-3">{recoveryRate}%</p>
            </Card>
            <Card className="bg-card border border-border p-6">
              <p className="text-muted-foreground text-sm">Active Cases</p>
              <p className="text-3xl font-bold mt-2 text-accent">
                {((latest.active / latest.confirmed) * 100).toFixed(1)}%
              </p>
            </Card>
          </div>
        </section>

        {/* Time Series Charts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Time Series Analysis</h2>
          <CountryTimeSeries countryData={countryData} />
        </section>
      </main>
    </div>
  )
}
