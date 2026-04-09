import type { Tag } from "#/types/tags";
import { TagsHeader } from "#/components/containers/vendors/tags/tags-header";
import { TagsTable } from "#/components/containers/vendors/tags/tags-table";

interface ShopTagsTemplateProps {
  tags: Tag[];
  onAddTag: () => void;
}

export function ShopTagsTemplate({
  tags,
  onAddTag,
}: ShopTagsTemplateProps) {
  return (
    <div className="space-y-6">
      <TagsHeader onAddTag={onAddTag} />
      <TagsTable tags={tags} />
    </div>
  );
}
