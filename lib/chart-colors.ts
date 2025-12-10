// Recharts cannot resolve CSS variables, so we need actual color values
export const CHART_COLORS = {
  // Primary colors for charts
  orange: "#f97316", // Primary accent - confirmed cases
  red: "#ef4444", // Destructive - deaths
  green: "#22c55e", // Success - recovered
  blue: "#3b82f6", // Info - active cases
  purple: "#8b5cf6", // Accent
  yellow: "#eab308", // Warning
  cyan: "#06b6d4", // Secondary
  pink: "#ec4899", // Highlight

  // Chart line colors (vibrant, high contrast)
  chart1: "#f97316", // Orange
  chart2: "#ef4444", // Red
  chart3: "#22c55e", // Green
  chart4: "#3b82f6", // Blue
  chart5: "#8b5cf6", // Purple

  // UI colors
  border: "#525252",
  muted: "#a3a3a3",
  background: "#262626",
  card: "#404040",
  foreground: "#f5f5f5",

  // Gradients for heatmaps
  heatmapLow: "#22c55e",
  heatmapMid: "#eab308",
  heatmapHigh: "#ef4444",
}

// Color palette for multi-line charts
export const LINE_COLORS = [
  "#f97316", // Orange
  "#3b82f6", // Blue
  "#22c55e", // Green
  "#8b5cf6", // Purple
  "#ec4899", // Pink
  "#06b6d4", // Cyan
  "#eab308", // Yellow
  "#ef4444", // Red
]

// Get color by index (cycles through palette)
export function getLineColor(index: number): string {
  return LINE_COLORS[index % LINE_COLORS.length]
}
