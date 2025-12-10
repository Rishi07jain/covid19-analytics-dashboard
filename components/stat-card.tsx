import { Card } from "@/components/ui/card"
import { BarChart3, AlertTriangle, CheckCircle, Activity } from "lucide-react"

interface StatCardProps {
  label: string
  value: number
  color: string
  icon: "chart" | "alert" | "check" | "activity" | string
}

export function StatCard({ label, value, color, icon }: StatCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "chart":
        return <BarChart3 className="w-6 h-6" />
      case "alert":
        return <AlertTriangle className="w-6 h-6" />
      case "check":
        return <CheckCircle className="w-6 h-6" />
      case "activity":
        return <Activity className="w-6 h-6" />
      default:
        return <BarChart3 className="w-6 h-6" />
    }
  }

  const getBgColor = () => {
    if (color.includes("orange")) return "bg-orange-500/20 text-orange-400"
    if (color.includes("red")) return "bg-red-500/20 text-red-400"
    if (color.includes("green")) return "bg-green-500/20 text-green-400"
    if (color.includes("blue")) return "bg-blue-500/20 text-blue-400"
    return "bg-primary/20 text-primary"
  }

  return (
    <Card className="bg-card border border-border p-6 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold mt-2">{value.toLocaleString()}</p>
        </div>
        <div className={`rounded-lg p-3 ${getBgColor()}`}>{getIcon()}</div>
      </div>
    </Card>
  )
}
