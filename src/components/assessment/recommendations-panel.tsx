import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Clock, Eye } from "lucide-react"

interface RecommendedActions {
  immediate: string[]
  within24Hours: string[]
  monitoring: string[]
}

interface RecommendationsPanelProps {
  actions: RecommendedActions
  careInstructions?: string
}

export function RecommendationsPanel({ actions, careInstructions }: RecommendationsPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Actions</CardTitle>
        <CardDescription>
          Follow these steps based on urgency level
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="immediate" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="immediate" className="gap-1">
              <AlertCircle className="h-3 w-3" />
              Immediate
            </TabsTrigger>
            <TabsTrigger value="24hours" className="gap-1">
              <Clock className="h-3 w-3" />
              24 Hours
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="gap-1">
              <Eye className="h-3 w-3" />
              Monitor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="immediate" className="space-y-2 mt-4">
            {actions.immediate.length > 0 ? (
              <ul className="space-y-2">
                {actions.immediate.map((action, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span className="text-sm">{action}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No immediate actions required</p>
            )}
          </TabsContent>

          <TabsContent value="24hours" className="space-y-2 mt-4">
            {actions.within24Hours.length > 0 ? (
              <ul className="space-y-2">
                {actions.within24Hours.map((action, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-sm">{action}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No actions needed within 24 hours</p>
            )}
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-2 mt-4">
            {actions.monitoring.length > 0 ? (
              <ul className="space-y-2">
                {actions.monitoring.map((action, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-sm">{action}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No monitoring required</p>
            )}
          </TabsContent>
        </Tabs>

        {careInstructions && (
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-semibold mb-2 text-sm">Care Instructions</h4>
            <p className="text-sm text-muted-foreground">{careInstructions}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
