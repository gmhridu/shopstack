import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";

interface RecentOrdersProps {
  className?: string;
}

export function RecentOrders({ className }: RecentOrdersProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent className="flex h-75 items-center justify-center text-muted-foreground">
        Recent orders list placeholder
      </CardContent>
    </Card>
  );
}
