"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Download, FileJson, FileText, Table2 } from "lucide-react"

interface CovidData {
  country_data: Record<string, any>
  last_updated: string
}

interface DataExporterProps {
  data: CovidData
}

export function DataExporter({ data }: DataExporterProps) {
  const [exporting, setExporting] = useState<string | null>(null)

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  const exportJSON = async () => {
    setExporting("json")
    try {
      const content = JSON.stringify(data, null, 2)
      downloadFile(content, `covid19-data-${new Date().toISOString().split("T")[0]}.json`, "application/json")
    } finally {
      setExporting(null)
    }
  }

  const exportCSV = async () => {
    setExporting("csv")
    try {
      let csv = "Country,Confirmed,Deaths,Recovered,Active,Continent\n"
      Object.entries(data.country_data).forEach(([country, countryData]) => {
        if (countryData.latest) {
          const { confirmed, deaths, recovered, active } = countryData.latest
          const continent = countryData.continent || "Unknown"
          csv += `"${country}",${confirmed},${deaths},${recovered},${active},"${continent}"\n`
        }
      })
      downloadFile(csv, `covid19-data-${new Date().toISOString().split("T")[0]}.csv`, "text/csv")
    } finally {
      setExporting(null)
    }
  }

  const exportSummary = async () => {
    setExporting("summary")
    try {
      const totals = {
        totalConfirmed: 0,
        totalDeaths: 0,
        totalRecovered: 0,
        totalActive: 0,
        totalCountries: 0,
      }

      Object.values(data.country_data).forEach((country: any) => {
        if (country.latest) {
          totals.totalConfirmed += country.latest.confirmed
          totals.totalDeaths += country.latest.deaths
          totals.totalRecovered += country.latest.recovered
          totals.totalActive += country.latest.active
          totals.totalCountries += 1
        }
      })

      const content = `COVID-19 Global Summary Report
Generated: ${new Date().toISOString()}

Global Statistics:
- Total Confirmed Cases: ${totals.totalConfirmed.toLocaleString()}
- Total Deaths: ${totals.totalDeaths.toLocaleString()}
- Total Recovered: ${totals.totalRecovered.toLocaleString()}
- Total Active Cases: ${totals.totalActive.toLocaleString()}
- Countries Affected: ${totals.totalCountries}

Global Rates:
- Death Rate: ${((totals.totalDeaths / totals.totalConfirmed) * 100).toFixed(2)}%
- Recovery Rate: ${((totals.totalRecovered / totals.totalConfirmed) * 100).toFixed(2)}%
- Active Rate: ${((totals.totalActive / totals.totalConfirmed) * 100).toFixed(2)}%

Data Source: Johns Hopkins CSSE COVID-19
`
      downloadFile(content, `covid19-summary-${new Date().toISOString().split("T")[0]}.txt`, "text/plain")
    } finally {
      setExporting(null)
    }
  }

  const exportTopCountries = async () => {
    setExporting("top-countries")
    try {
      const countries = Object.entries(data.country_data)
        .filter(([_, c]) => c.latest)
        .map(([name, c]) => ({
          name,
          confirmed: c.latest.confirmed,
          deaths: c.latest.deaths,
          recovered: c.latest.recovered,
          active: c.latest.active,
          continent: c.continent || "Unknown",
        }))
        .sort((a, b) => b.confirmed - a.confirmed)
        .slice(0, 50)

      let csv = "Rank,Country,Confirmed,Deaths,Recovered,Active,Continent,Death Rate (%)\n"
      countries.forEach((country, idx) => {
        const deathRate = ((country.deaths / country.confirmed) * 100).toFixed(2)
        csv += `${idx + 1},"${country.name}",${country.confirmed},${country.deaths},${country.recovered},${country.active},"${country.continent}",${deathRate}\n`
      })
      downloadFile(csv, `covid19-top-countries-${new Date().toISOString().split("T")[0]}.csv`, "text/csv")
    } finally {
      setExporting(null)
    }
  }

  return (
    <div className="space-y-8">
      {/* Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Available Exports</h2>
        <p className="text-muted-foreground mb-8">
          Download COVID-19 datasets in multiple formats. All data includes the latest available statistics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* JSON Export */}
          <Card className="bg-card border border-border p-6 hover:border-primary/50 cursor-pointer transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <FileJson className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Complete JSON Dataset</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Full raw data including time-series for all countries in JSON format
                </p>
                <button
                  onClick={exportJSON}
                  disabled={exporting !== null}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {exporting === "json" ? "Exporting..." : "Download"}
                </button>
              </div>
            </div>
          </Card>

          {/* CSV Export */}
          <Card className="bg-card border border-border p-6 hover:border-primary/50 cursor-pointer transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Table2 className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Country Summary (CSV)</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Latest statistics for all countries in spreadsheet format
                </p>
                <button
                  onClick={exportCSV}
                  disabled={exporting !== null}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {exporting === "csv" ? "Exporting..." : "Download"}
                </button>
              </div>
            </div>
          </Card>

          {/* Top Countries Export */}
          <Card className="bg-card border border-border p-6 hover:border-primary/50 cursor-pointer transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Table2 className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Top 50 Countries</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  50 countries with highest cases, ranked by confirmed cases
                </p>
                <button
                  onClick={exportTopCountries}
                  disabled={exporting !== null}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {exporting === "top-countries" ? "Exporting..." : "Download"}
                </button>
              </div>
            </div>
          </Card>

          {/* Summary Report */}
          <Card className="bg-card border border-border p-6 hover:border-primary/50 cursor-pointer transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Global Summary Report</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Text report with global statistics and key metrics</p>
                <button
                  onClick={exportSummary}
                  disabled={exporting !== null}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {exporting === "summary" ? "Exporting..." : "Download"}
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Attribution */}
      <section className="bg-muted/30 rounded-lg p-8">
        <h3 className="text-lg font-semibold mb-4">Data Attribution</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong>Johns Hopkins CSSE:</strong> COVID-19 case data (cases, deaths, recoveries)
          </li>
          <li>
            <strong>World Bank Open Data:</strong> Socioeconomic indicators (GDP, population, life expectancy, etc.)
          </li>
          <li>
            <strong>DataHub:</strong> Country-to-continent mapping
          </li>
        </ul>
      </section>

      {/* Usage Guide */}
      <section className="bg-muted/30 rounded-lg p-8">
        <h3 className="text-lg font-semibold mb-4">How to Use These Exports</h3>
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h4 className="font-medium text-foreground mb-2">JSON Format</h4>
            <p>Import into custom analysis tools, web applications, or data visualization platforms.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">CSV Format</h4>
            <p>Open in Excel, Google Sheets, or Tableau for spreadsheet analysis and visualization.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Summary Report</h4>
            <p>Share global statistics and key metrics with stakeholders or include in presentations.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
