import type { CovidData as SampleCovidData } from "./sample-covid-data"

export async function fetchCovidData(): Promise<SampleCovidData | null> {
  try {
    const response = await fetch("/api/covid-data", {
      cache: "no-store",
    })

    if (!response.ok) {
      console.error("[v0] COVID data fetch failed with status:", response.status)
      return null
    }

    const data: SampleCovidData = await response.json()
    return data
  } catch (error) {
    console.error("[v0] Fetch error:", error)
    return null
  }
}

export function getEmptyCovidData(): SampleCovidData {
  return {
    country_data: {},
    last_updated: new Date().toISOString(),
    data_source: "empty",
  }
}
