"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { StatCard } from "@/components/stat-card"
import { ChoroplethMap } from "@/components/choropleth-map"
import { LiveTicker } from "@/components/live-ticker"
import { Loader, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { fetchCovidData, getEmptyCovidData } from "@/lib/covid-data"

interface CovidData {
  country_data: Record<string, any>
  last_updated: string
  data_source?: string
}

export function GlobalDashboard() {
  const router = useRouter()
  const [data, setData] = useState<CovidData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [globalStats, setGlobalStats] = useState({
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    active: 0,
  })

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      setError(null)

      const covidData = await fetchCovidData()

      if (!covidData || !covidData.country_data) {
        setData(getEmptyCovidData())
        setError("Unable to load COVID-19 data. Please ensure the data processing scripts have been run.")
        setLoading(false)
        return
      }

      setData(covidData)

      // Calculate global statistics
      const totals = { confirmed: 0, deaths: 0, recovered: 0, active: 0 }
      try {
        Object.values(covidData.country_data).forEach((country: any) => {
          if (country.latest && typeof country.latest === "object") {
            totals.confirmed += country.latest.confirmed || 0
            totals.deaths += country.latest.deaths || 0
            totals.recovered += country.latest.recovered || 0
            totals.active += country.latest.active || 0
          }
        })
      } catch (statError) {
        console.error("[v0] Error calculating statistics:", statError)
      }

      setGlobalStats(totals)
      setLoading(false)
    }

    loadData()
  }, [])

  const handleCountrySelect = (country: string) => {
    router.push(`/country/${encodeURIComponent(country)}`)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading global data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-balance">COVID-19 Global Analytics</h1>
              <p className="text-muted-foreground mt-2">Real-time statistics and insights</p>
            </div>
            {data && (
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date(data.last_updated).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 h-14">
            <a href="/" className="text-foreground font-medium hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="/analytics" className="text-muted-foreground font-medium hover:text-primary transition-colors">
              Analytics
            </a>
            <a href="/socioeconomic" className="text-muted-foreground font-medium hover:text-primary transition-colors">
              Socioeconomic
            </a>
            <a href="/export" className="text-muted-foreground font-medium hover:text-primary transition-colors">
              Export
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Error Alert */}
        {error && (
          <Card className="bg-destructive/10 border border-destructive/20 p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-destructive">Data Loading Error</h3>
                <p className="text-sm text-destructive/80 mt-1">{error}</p>
              </div>
            </div>
          </Card>
        )}

        {data && Object.keys(data.country_data).length > 0 && (
          <section className="mb-8">
            <LiveTicker data={data.country_data} />
          </section>
        )}

        {/* Global Statistics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Global Statistics</h2>
          {globalStats.confirmed === 0 ? (
            <Card className="bg-card border border-border p-8 text-center">
              <p className="text-muted-foreground">
                No data available. Please run the data processing scripts to populate the database.
              </p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="Confirmed" value={globalStats.confirmed} color="bg-orange-500" icon="chart" />
              <StatCard label="Deaths" value={globalStats.deaths} color="bg-red-500" icon="alert" />
              <StatCard label="Recovered" value={globalStats.recovered} color="bg-green-500" icon="check" />
              <StatCard label="Active" value={globalStats.active} color="bg-blue-500" icon="activity" />
            </div>
          )}
        </section>

        {/* Choropleth Map & Analytics */}
        {data && Object.keys(data.country_data).length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Global Distribution & Rankings</h2>
            <ChoroplethMap data={data.country_data} onCountrySelect={handleCountrySelect} />
          </section>
        )}

        {/* Attribution */}
        <footer className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Data sources: Johns Hopkins CSSE COVID-19 | World Bank Open Data | DataHub</p>
        </footer>
      </main>
    </div>
  )
}
