import { sampleCovidData, sampleSocioeconomicData } from "@/lib/sample-covid-data"

export async function GET() {
  // Return embedded sample data directly - no file reading needed
  return Response.json({
    ...sampleCovidData,
    socioeconomic: sampleSocioeconomicData,
  })
}
