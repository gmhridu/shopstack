import { CalendarIcon, MapPinIcon, PackageIcon, TruckIcon } from "lucide-react";

interface TrackingDetailsCardProps {
  carrier: string;
  trackingNumber: string;
  currentLocation: string;
  estimatedDelivery: string;
  packageInfo?: {
    weight?: string;
    dimensions?: string;
  };
}

export function TrackingDetailsCard({
  carrier,
  trackingNumber,
  currentLocation,
  estimatedDelivery,
  packageInfo,
}: TrackingDetailsCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="mb-4 font-semibold text-xl">Tracking Details</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <TruckIcon className="mt-0.5 size-5 text-primary" />
          <div>
            <p className="font-medium text-base text-foreground">Carrier</p>
            <p className="text-muted-foreground text-sm">{carrier}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <PackageIcon className="mt-0.5 size-5 text-primary" />
          <div>
            <p className="font-medium text-base text-foreground">
              Tracking Number
            </p>
            <p className="font-mono text-muted-foreground text-sm">
              {trackingNumber}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPinIcon className="mt-0.5 size-5 text-primary" />
          <div>
            <p className="font-medium text-base text-foreground">
              Current Location
            </p>
            <p className="font-mono text-muted-foreground text-sm">
              {currentLocation}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CalendarIcon className="mt-0.5 size-5 text-primary" />
          <div>
            <p className="font-medium text-base text-foreground">
              Estimated Delivery
            </p>
            <p className="font-mono text-muted-foreground text-sm">
              {estimatedDelivery}
            </p>
          </div>
        </div>

        {packageInfo && (
          <div className="border-t pt-4">
            <p className="mb-2 font-medium text-base text-foreground">
              Package Information
            </p>
            <div className="space-y-1 text-muted-foreground text-sm">
              {packageInfo.weight && <p>Weight: {packageInfo.weight}</p>}
              {packageInfo.dimensions && (
                <p>Dimensions: {packageInfo.dimensions}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
