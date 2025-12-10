"use client"

import { useState, useEffect } from "react"
import { SocioeconomicAnalysis } from "@/components/socioeconomic-analysis"
import { Loader, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { fetchCovidData, getEmptyCovidData } from "@/lib/covid-data"

interface CovidData {
  country_data: Record<string, any>
  last_updated: string
}

export default function SocioeconomicPage() {
  const [data, setData] = useState<CovidData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const covidData = await fetchCovidData()

      if (!covidData || !covidData.country_data) {
        setError("Unable to load COVID-19 data. Please ensure the data processing scripts have been run.")
        setData(getEmptyCovidData())
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-4">
            <Link href="/" className="text-primary hover:text-primary/80 text-sm">
              ← Back to Dashboard
            </Link>
          </div>
          <h1 className="text-4xl font-bold">Socioeconomic Analysis</h1>
          <p className="text-muted-foreground mt-2">COVID-19 impact and correlations with economic indicators</p>
        </div>
      </header>

      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <Card className="bg-destructive/10 border border-destructive/20 p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-destructive">Data Loading Error</h3>
                <p className="text-sm text-destructive/80 mt-1">{error}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {data && Object.keys(data.country_data).length > 0 && <SocioeconomicAnalysis data={data.country_data} />}
        {!data ||
          (Object.keys(data.country_data).length === 0 && (
            <Card className="bg-card border border-border p-8 text-center">
              <p className="text-muted-foreground">No data available. Please run the data processing scripts first.</p>
            </Card>
          ))}
      </main>
    </div>
  )
}
