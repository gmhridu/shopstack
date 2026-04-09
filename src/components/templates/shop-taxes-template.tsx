import { TaxesHeader } from "@/components/containers/vendors/taxes/taxes-header";
import { TaxesTable } from "@/components/containers/vendors/taxes/taxes-table";
import type { Taxes as Tax } from "@/types/taxes";

interface ShopTaxesTemplateProps {
  taxes: Tax[];
  onAddTax: () => void;
}

export function ShopTaxesTemplate({
  taxes,
  onAddTax,
}: ShopTaxesTemplateProps) {
  return (
    <div className="space-y-6">
      <TaxesHeader onAddTax={onAddTax} />
      <TaxesTable taxes={taxes} />
    </div>
  );
}
