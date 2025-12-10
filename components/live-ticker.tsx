"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, Minus, RefreshCw } from "lucide-react"

interface TickerItem {
  country: string
  confirmed: number
  deaths: number
  change: number
  trend: "up" | "down" | "stable"
}

interface LiveTickerProps {
  data: Record<string, any>
}

export function LiveTicker({ data }: LiveTickerProps) {
  const [tickerData, setTickerData] = useState<TickerItem[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  useEffect(() => {
    const generateTickerData = () => {
      const countries = Object.entries(data)
        .filter(([_, country]) => country.latest && country.latest.confirmed > 100000)
        .map(([name, country]) => {
          const change = Math.floor(Math.random() * 10000) - 3000 // Simulated daily change
          return {
            country: name,
            confirmed: country.latest.confirmed,
            deaths: country.latest.deaths,
            change,
            trend: change > 1000 ? "up" : change < -1000 ? "down" : ("stable" as const),
          }
        })
        .sort((a, b) => b.confirmed - a.confirmed)
        .slice(0, 20)

      setTickerData(countries)
    }

    generateTickerData()
  }, [data])

  const simulateRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setTickerData((prev) =>
        prev.map((item) => {
          const change = Math.floor(Math.random() * 8000) - 2000
          return {
            ...item,
            confirmed: item.confirmed + Math.abs(change),
            change,
            trend: change > 1000 ? "up" : change < -1000 ? "down" : ("stable" as const),
          }
        }),
      )
      setLastUpdate(new Date())
      setIsRefreshing(false)
    }, 1000)
  }

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(simulateRefresh, 30000)
    return () => clearInterval(interval)
  }, [])

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-red-400" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-green-400" />
      default:
        return <Minus className="w-4 h-4 text-yellow-400" />
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium">Live Statistics</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">Updated: {lastUpdate.toLocaleTimeString()}</span>
          <button
            onClick={simulateRefresh}
            disabled={isRefreshing}
            className="p-1 hover:bg-muted rounded transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Ticker Content */}
      <div className="overflow-hidden">
        <div className="animate-marquee flex">
          {[...tickerData, ...tickerData].map((item, idx) => (
            <div
              key={`${item.country}-${idx}`}
              className="flex items-center gap-4 px-6 py-3 border-r border-border whitespace-nowrap"
            >
              <span className="font-medium">{item.country}</span>
              <span className="text-orange-400">{item.confirmed.toLocaleString()}</span>
              <div className="flex items-center gap-1">
                {getTrendIcon(item.trend)}
                <span
                  className={
                    item.change > 0
                      ? "text-red-400 text-sm"
                      : item.change < 0
                        ? "text-green-400 text-sm"
                        : "text-yellow-400 text-sm"
                  }
                >
                  {item.change > 0 ? "+" : ""}
                  {item.change.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4 px-4 py-3 border-t border-border bg-muted/20">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Total Tracked</p>
          <p className="text-lg font-bold text-orange-400">
            {tickerData.reduce((sum, item) => sum + item.confirmed, 0).toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Countries</p>
          <p className="text-lg font-bold">{tickerData.length}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Rising</p>
          <p className="text-lg font-bold text-red-400">{tickerData.filter((i) => i.trend === "up").length}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Declining</p>
          <p className="text-lg font-bold text-green-400">{tickerData.filter((i) => i.trend === "down").length}</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
