import { CreditCardIcon } from "lucide-react";

interface OrderInfoSectionProps {
  paymentMethod: string;
  address: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  deliveryMethod: string;
}

export function OrderInfoSection({
  paymentMethod,
  address,
  deliveryMethod,
}: OrderInfoSectionProps) {
  return (
    <div className="grid gap-6 @xl:grid-cols-3">
      <div>
        <h3 className="mb-3 font-semibold">Payment Method</h3>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <CreditCardIcon className="size-4" />
          <span>{paymentMethod}</span>
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-semibold">Address</h3>
        <div className="text-muted-foreground text-sm">
          <p>{address.name}</p>
          <p>{address.street}</p>
          <p>
            {address.city}, {address.state} {address.zip}
          </p>
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-semibold">Delivery Method</h3>
        <p className="text-muted-foreground text-sm">{deliveryMethod}</p>
      </div>
    </div>
  );
}
