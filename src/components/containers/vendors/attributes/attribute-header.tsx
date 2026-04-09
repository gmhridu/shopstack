import { PageHeader } from "#/components/base/common/page-header";
import { Button } from "#/components/ui/button";
import { PlusIcon } from "lucide-react";

interface AttributeHeaderProps {
  onAddAttribute: () => void;
  className?: string;
}

export function AttributeHeader({
  onAddAttribute,
  className,
}: AttributeHeaderProps) {
  return (
    <PageHeader
      title="Attributes"
      description="Manage your product attributes and variations"
      className={className}
    >
      <Button onClick={onAddAttribute}>
        <PlusIcon className="mr-2 size-4" />
        Add Attribute
      </Button>
    </PageHeader>
  );
}
