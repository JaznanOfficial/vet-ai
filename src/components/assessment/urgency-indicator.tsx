import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface UrgencyIndicatorProps {
  level: "critical" | "high" | "medium" | "low"
  className?: string
}

const urgencyConfig = {
  critical: {
    label: "Critical",
    color: "bg-red-500 text-white",
    description: "Seek immediate veterinary care",
  },
  high: {
    label: "High",
    color: "bg-orange-500 text-white",
    description: "Visit vet within 24 hours",
  },
  medium: {
    label: "Medium",
    color: "bg-yellow-500 text-white",
    description: "Schedule vet appointment soon",
  },
  low: {
    label: "Low",
    color: "bg-green-500 text-white",
    description: "Monitor at home",
  },
}

export function UrgencyIndicator({ level, className }: UrgencyIndicatorProps) {
  const config = urgencyConfig[level]

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Badge className={cn("font-semibold", config.color)}>
        {config.label}
      </Badge>
      <span className="text-sm text-muted-foreground">
        {config.description}
      </span>
    </div>
  )
}
