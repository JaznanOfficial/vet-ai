import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface Condition {
  name: string
  probability: "high" | "medium" | "low"
  description: string
}

interface ConditionCardProps {
  condition: Condition
}

const probabilityConfig = {
  high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
}

export function ConditionCard({ condition }: ConditionCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{condition.name}</CardTitle>
          <Badge className={probabilityConfig[condition.probability]} variant="secondary">
            {condition.probability} probability
          </Badge>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <CardDescription className="text-sm">
          {condition.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
