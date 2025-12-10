"use client"

import { useState, useEffect, useCallback } from "react"
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, RotateCcw } from "lucide-react"
import { CHART_COLORS } from "@/lib/chart-colors"

interface SimulationData {
  day: number
  susceptible: number
  infected: number
  recovered: number
  deaths: number
}

export function PandemicSimulator() {
  const [isRunning, setIsRunning] = useState(false)
  const [day, setDay] = useState(0)
  const [data, setData] = useState<SimulationData[]>([])

  // Simulation parameters
  const [population, setPopulation] = useState(1000000)
  const [r0, setR0] = useState(2.5)
  const [mortalityRate, setMortalityRate] = useState(2)
  const [recoveryDays, setRecoveryDays] = useState(14)
  const [interventionDay, setInterventionDay] = useState(30)
  const [interventionEffect, setInterventionEffect] = useState(50) // % reduction in R0

  const runSimulation = useCallback(() => {
    const results: SimulationData[] = []
    let S = population - 100 // Initial susceptible
    let I = 100 // Initial infected
    let R = 0 // Recovered
    let D = 0 // Deaths

    const gamma = 1 / recoveryDays // Recovery rate
    const mu = mortalityRate / 100 // Mortality rate

    for (let d = 0; d <= 180; d++) {
      // Apply intervention effect after intervention day
      const currentR0 = d >= interventionDay ? r0 * (1 - interventionEffect / 100) : r0
      const beta = currentR0 * gamma // Transmission rate

      // SIR model differential equations (simplified discrete version)
      const newInfections = Math.min(S, (beta * S * I) / population)
      const newRecoveries = gamma * I * (1 - mu)
      const newDeaths = gamma * I * mu

      S = Math.max(0, S - newInfections)
      I = Math.max(0, I + newInfections - newRecoveries - newDeaths)
      R = R + newRecoveries
      D = D + newDeaths

      results.push({
        day: d,
        susceptible: Math.round(S),
        infected: Math.round(I),
        recovered: Math.round(R),
        deaths: Math.round(D),
      })
    }

    setData(results)
  }, [population, r0, mortalityRate, recoveryDays, interventionDay, interventionEffect])

  useEffect(() => {
    runSimulation()
  }, [runSimulation])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && day < 180) {
      interval = setInterval(() => {
        setDay((prev) => Math.min(prev + 1, 180))
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isRunning, day])

  const reset = () => {
    setDay(0)
    setIsRunning(false)
    runSimulation()
  }

  const currentData = data.slice(0, day + 1)
  const currentStats = data[day] || { susceptible: 0, infected: 0, recovered: 0, deaths: 0 }

  return (
    <div className="space-y-6">
      <Card className="bg-card border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Pandemic Spread Simulator</h2>
            <p className="text-muted-foreground text-sm mt-1">Interactive SIR model simulation</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setIsRunning(!isRunning)}>
              {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="icon" onClick={reset}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Current Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-muted/30 rounded-lg p-4 text-center">
            <p className="text-xs text-muted-foreground mb-1">Day</p>
            <p className="text-2xl font-bold">{day}</p>
          </div>
          <div className="bg-blue-500/20 rounded-lg p-4 text-center">
            <p className="text-xs text-blue-400 mb-1">Susceptible</p>
            <p className="text-2xl font-bold text-blue-400">{currentStats.susceptible.toLocaleString()}</p>
          </div>
          <div className="bg-orange-500/20 rounded-lg p-4 text-center">
            <p className="text-xs text-orange-400 mb-1">Infected</p>
            <p className="text-2xl font-bold text-orange-400">{currentStats.infected.toLocaleString()}</p>
          </div>
          <div className="bg-green-500/20 rounded-lg p-4 text-center">
            <p className="text-xs text-green-400 mb-1">Recovered</p>
            <p className="text-2xl font-bold text-green-400">{currentStats.recovered.toLocaleString()}</p>
          </div>
          <div className="bg-red-500/20 rounded-lg p-4 text-center">
            <p className="text-xs text-red-400 mb-1">Deaths</p>
            <p className="text-2xl font-bold text-red-400">{currentStats.deaths.toLocaleString()}</p>
          </div>
        </div>

        {/* Timeline Slider */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Timeline: Day {day}</label>
          <Slider
            value={[day]}
            onValueChange={([value]) => {
              setDay(value)
              setIsRunning(false)
            }}
            max={180}
            step={1}
            className="w-full"
          />
        </div>
      </Card>

      {/* Simulation Chart */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Disease Progression</h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={currentData}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
            <XAxis dataKey="day" stroke={CHART_COLORS.muted} tick={{ fill: CHART_COLORS.muted }} />
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
              formatter={(value: number) => value.toLocaleString()}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="susceptible"
              stackId="1"
              stroke={CHART_COLORS.blue}
              fill={CHART_COLORS.blue}
              fillOpacity={0.6}
              name="Susceptible"
            />
            <Area
              type="monotone"
              dataKey="infected"
              stackId="1"
              stroke={CHART_COLORS.orange}
              fill={CHART_COLORS.orange}
              fillOpacity={0.6}
              name="Infected"
            />
            <Area
              type="monotone"
              dataKey="recovered"
              stackId="1"
              stroke={CHART_COLORS.green}
              fill={CHART_COLORS.green}
              fillOpacity={0.6}
              name="Recovered"
            />
            <Area
              type="monotone"
              dataKey="deaths"
              stackId="1"
              stroke={CHART_COLORS.red}
              fill={CHART_COLORS.red}
              fillOpacity={0.6}
              name="Deaths"
            />
          </AreaChart>
        </ResponsiveContainer>
        {interventionDay <= day && (
          <div className="mt-4 p-3 bg-green-500/20 rounded-lg text-sm text-green-400">
            Intervention active since Day {interventionDay} - R0 reduced by {interventionEffect}%
          </div>
        )}
      </Card>

      {/* Parameters */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Simulation Parameters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="text-sm font-medium mb-2 block">R0 (Basic Reproduction Number): {r0.toFixed(1)}</label>
            <Slider value={[r0]} onValueChange={([v]) => setR0(v)} min={0.5} max={6} step={0.1} />
            <p className="text-xs text-muted-foreground mt-1">Average number of people infected by one person</p>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Mortality Rate: {mortalityRate}%</label>
            <Slider
              value={[mortalityRate]}
              onValueChange={([v]) => setMortalityRate(v)}
              min={0.1}
              max={10}
              step={0.1}
            />
            <p className="text-xs text-muted-foreground mt-1">Percentage of infected who die</p>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Recovery Time: {recoveryDays} days</label>
            <Slider value={[recoveryDays]} onValueChange={([v]) => setRecoveryDays(v)} min={5} max={30} step={1} />
            <p className="text-xs text-muted-foreground mt-1">Average days until recovery</p>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Intervention Day: {interventionDay}</label>
            <Slider
              value={[interventionDay]}
              onValueChange={([v]) => setInterventionDay(v)}
              min={1}
              max={90}
              step={1}
            />
            <p className="text-xs text-muted-foreground mt-1">Day when lockdown/measures begin</p>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Intervention Effect: {interventionEffect}%</label>
            <Slider
              value={[interventionEffect]}
              onValueChange={([v]) => setInterventionEffect(v)}
              min={0}
              max={90}
              step={5}
            />
            <p className="text-xs text-muted-foreground mt-1">Reduction in transmission rate</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
