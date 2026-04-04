import { DownloadIcon, TruckIcon } from "lucide-react";
import { Button } from "#/components/ui/button";

interface OrderDetailsCardProps {
  orderId: string;
  orderDate: string;
  estimatedDelivery: string;
}

export function OrderDetailsCard({
  orderId,
  orderDate,
  estimatedDelivery,
}: OrderDetailsCardProps) {
  return (
    <div className="rounded-lg bg-primary p-6 text-primary-foreground shadow-lg">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <h2 className="mb-3 font-semibold text-2xl">Order #{orderId}</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium">Order Date:</span>
              <span>{orderDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Estimated Delivery:</span>
              <span className="text-yellow-200 font-semibold">
                {estimatedDelivery}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white"
          >
            <DownloadIcon className="mr-2 size-4" />
            Download Invoice
          </Button>
          <Button
            size="lg"
            className="rounded-full bg-white text-primary hover:bg-gray-100 font-semibold"
          >
            <TruckIcon className="mr-2 size-4" />
            Track Order
          </Button>
        </div>
      </div>
    </div>
  );
}
