import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { Attribute } from "#/types/attributes";
import { mockAttributes } from "#/data/attribute";
import { ShopAttributesTemplate } from "#/components/templates/vendor/shop-attributes-template";
import { AddAttributeDialog } from "#/components/containers/vendors/attributes/add-attribute-dialog";

export const Route = createFileRoute("/(vendor)/shop/$slug/attributes")({
  component: RouteComponent,
});

function RouteComponent() {
  const [attributes, setAttributes] = useState<Attribute[]>(mockAttributes);
  const [isAddAttributeDialogOpen, setIsAddAttributeDialogOpen] =
    useState(false);

  const handleAddAttribute = () => {
    setIsAddAttributeDialogOpen(true);
  };

  const handleAddAttributeSubmit = (data: any) => {
    const newAttribute: Attribute = {
      id: String(attributes.length + 1),
      name: data.name,
      slug: data.slug,
      values: data.values.map((v: any, i: number) => ({
        ...v,
        id: `${attributes.length + 1}-${i}`,
      })),
      type: data.type,
    };
    setAttributes([...attributes, newAttribute]);
  };

  return (
    <>
      <ShopAttributesTemplate
        attributes={attributes}
        onAddAttribute={handleAddAttribute}
      />

      <AddAttributeDialog
        open={isAddAttributeDialogOpen}
        onOpenChange={setIsAddAttributeDialogOpen}
        onSubmit={handleAddAttributeSubmit}
      />
    </>
  );
}
