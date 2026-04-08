import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";

interface CustomerInsightsProps {
  className?: string;
}

export function CustomerInsights({ className }: CustomerInsightsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Customer Insights</CardTitle>
      </CardHeader>
      <CardContent className="flex h-50 items-center justify-center text-muted-foreground">
        Customer analytics placeholder
      </CardContent>
    </Card>
  );
}
