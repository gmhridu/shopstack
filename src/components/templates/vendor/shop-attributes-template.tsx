import type { Attribute } from "#/types/attributes";
import { AttributeHeader } from "#/components/containers/vendors/attributes/attribute-header";
import { AttributeTable } from "#/components/containers/vendors/attributes/attribute-table";

interface ShopAttributesTemplateProps {
  attributes: Attribute[];
  onAddAttribute: () => void;
}

export function ShopAttributesTemplate({
  attributes,
  onAddAttribute,
}: ShopAttributesTemplateProps) {
  return <div className="space-y-6">
    <AttributeHeader onAddAttribute={onAddAttribute}/>
    <AttributeTable attributes={attributes}/>
  </div>;
}
