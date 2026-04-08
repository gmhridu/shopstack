import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";

interface TopProductsProps {
  className?: string;
}

export function TopProducts({ className }: TopProductsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent className="flex h-50 items-center justify-center text-muted-foreground">
        Top products list placeholder
      </CardContent>
    </Card>
  );
}
