"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { AlertTriangle, Shield, Activity, Users } from "lucide-react"
import { CHART_COLORS } from "@/lib/chart-colors"

interface RiskFactor {
  id: string
  name: string
  description: string
  weight: number
  value: number
  icon: React.ReactNode
}

export function RiskCalculator() {
  const [factors, setFactors] = useState<RiskFactor[]>([
    {
      id: "age",
      name: "Age Group",
      description: "Risk increases significantly above 60",
      weight: 25,
      value: 30,
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "conditions",
      name: "Pre-existing Conditions",
      description: "Diabetes, heart disease, respiratory issues",
      weight: 30,
      value: 0,
      icon: <Activity className="w-5 h-5" />,
    },
    {
      id: "exposure",
      name: "Exposure Level",
      description: "Contact with infected individuals",
      weight: 20,
      value: 20,
      icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
      id: "vaccination",
      name: "Vaccination Status",
      description: "Fully vaccinated significantly reduces risk",
      weight: 25,
      value: 100,
      icon: <Shield className="w-5 h-5" />,
    },
  ])

  const [localCaseRate, setLocalCaseRate] = useState(50) // cases per 100k

  const updateFactor = (id: string, value: number) => {
    setFactors(factors.map((f) => (f.id === id ? { ...f, value } : f)))
  }

  const riskScore = useMemo(() => {
    let score = 0

    // Age contribution (higher age = higher risk)
    const ageFactor = factors.find((f) => f.id === "age")!
    if (ageFactor.value < 40) score += 5
    else if (ageFactor.value < 60) score += 15
    else if (ageFactor.value < 75) score += 30
    else score += 45

    // Pre-existing conditions (0-100 scale, higher = more conditions)
    const conditionsFactor = factors.find((f) => f.id === "conditions")!
    score += (conditionsFactor.value / 100) * 30

    // Exposure level
    const exposureFactor = factors.find((f) => f.id === "exposure")!
    score += (exposureFactor.value / 100) * 20

    // Vaccination (higher = more protected, reduces risk)
    const vaccinationFactor = factors.find((f) => f.id === "vaccination")!
    score -= (vaccinationFactor.value / 100) * 25

    // Local case rate multiplier
    score *= 0.5 + localCaseRate / 100

    return Math.max(0, Math.min(100, Math.round(score)))
  }, [factors, localCaseRate])

  const getRiskLevel = (score: number) => {
    if (score < 20) return { level: "Low", color: CHART_COLORS.green, bg: "bg-green-500/20", text: "text-green-400" }
    if (score < 40)
      return { level: "Moderate", color: CHART_COLORS.yellow, bg: "bg-yellow-500/20", text: "text-yellow-400" }
    if (score < 60)
      return { level: "Elevated", color: CHART_COLORS.orange, bg: "bg-orange-500/20", text: "text-orange-400" }
    if (score < 80) return { level: "High", color: CHART_COLORS.red, bg: "bg-red-500/20", text: "text-red-400" }
    return { level: "Critical", color: "#dc2626", bg: "bg-red-600/20", text: "text-red-500" }
  }

  const riskLevel = getRiskLevel(riskScore)

  const recommendations = useMemo(() => {
    const recs: string[] = []

    const vaccination = factors.find((f) => f.id === "vaccination")!
    if (vaccination.value < 100) {
      recs.push("Consider getting fully vaccinated to significantly reduce your risk")
    }

    const exposure = factors.find((f) => f.id === "exposure")!
    if (exposure.value > 50) {
      recs.push("Reduce contact with potentially infected individuals")
      recs.push("Wear high-quality masks in crowded indoor settings")
    }

    const age = factors.find((f) => f.id === "age")!
    if (age.value >= 60) {
      recs.push("Consider additional precautions due to age-related risk factors")
      recs.push("Ensure you have access to antiviral treatments if needed")
    }

    const conditions = factors.find((f) => f.id === "conditions")!
    if (conditions.value > 30) {
      recs.push("Consult with your healthcare provider about additional protective measures")
    }

    if (localCaseRate > 75) {
      recs.push("Consider limiting non-essential activities during high transmission periods")
    }

    if (recs.length === 0) {
      recs.push("Continue practicing good hygiene and stay informed about local conditions")
    }

    return recs
  }, [factors, localCaseRate])

  return (
    <div className="space-y-6">
      <Card className="bg-card border border-border p-6">
        <h2 className="text-2xl font-bold mb-2">Personal Risk Assessment</h2>
        <p className="text-muted-foreground text-sm mb-6">Estimate your COVID-19 risk based on personal factors</p>

        {/* Risk Score Display */}
        <div className={`${riskLevel.bg} rounded-xl p-6 mb-6`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Your Risk Score</p>
              <p className={`text-5xl font-bold ${riskLevel.text}`}>{riskScore}</p>
              <p className={`text-lg font-semibold ${riskLevel.text} mt-1`}>{riskLevel.level} Risk</p>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="56" stroke={CHART_COLORS.border} strokeWidth="8" fill="none" />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke={riskLevel.color}
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(riskScore / 100) * 352} 352`}
                  strokeLinecap="round"
                />
              </svg>
              <span
                className={`absolute inset-0 flex items-center justify-center text-2xl font-bold ${riskLevel.text}`}
              >
                {riskScore}%
              </span>
            </div>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-muted-foreground" />
              <label className="text-sm font-medium">Age: {factors.find((f) => f.id === "age")!.value} years</label>
            </div>
            <Slider
              value={[factors.find((f) => f.id === "age")!.value]}
              onValueChange={([v]) => updateFactor("age", v)}
              min={18}
              max={90}
              step={1}
            />
            <p className="text-xs text-muted-foreground mt-1">Risk increases significantly above age 60</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-muted-foreground" />
              <label className="text-sm font-medium">
                Pre-existing Conditions: {factors.find((f) => f.id === "conditions")!.value}%
              </label>
            </div>
            <Slider
              value={[factors.find((f) => f.id === "conditions")!.value]}
              onValueChange={([v]) => updateFactor("conditions", v)}
              min={0}
              max={100}
              step={10}
            />
            <p className="text-xs text-muted-foreground mt-1">0 = None, 100 = Multiple severe conditions</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-muted-foreground" />
              <label className="text-sm font-medium">
                Exposure Level: {factors.find((f) => f.id === "exposure")!.value}%
              </label>
            </div>
            <Slider
              value={[factors.find((f) => f.id === "exposure")!.value]}
              onValueChange={([v]) => updateFactor("exposure", v)}
              min={0}
              max={100}
              step={10}
            />
            <p className="text-xs text-muted-foreground mt-1">0 = Work from home, 100 = Healthcare worker</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <label className="text-sm font-medium">
                Vaccination Status: {factors.find((f) => f.id === "vaccination")!.value}%
              </label>
            </div>
            <Slider
              value={[factors.find((f) => f.id === "vaccination")!.value]}
              onValueChange={([v]) => updateFactor("vaccination", v)}
              min={0}
              max={100}
              step={25}
            />
            <p className="text-xs text-muted-foreground mt-1">0 = Unvaccinated, 100 = Fully vaccinated + boosted</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-muted-foreground" />
              <label className="text-sm font-medium">Local Case Rate: {localCaseRate} per 100k</label>
            </div>
            <Slider value={[localCaseRate]} onValueChange={([v]) => setLocalCaseRate(v)} min={0} max={200} step={5} />
            <p className="text-xs text-muted-foreground mt-1">Current community transmission level</p>
          </div>
        </div>
      </Card>

      {/* Recommendations */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Personalized Recommendations</h3>
        <ul className="space-y-3">
          {recommendations.map((rec, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-muted-foreground">{rec}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
          Disclaimer: This calculator provides estimates for educational purposes only. Consult healthcare professionals
          for medical advice.
        </p>
      </Card>
    </div>
  )
}
