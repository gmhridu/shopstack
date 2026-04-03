import { CategoryTree } from "#/components/base/store/category/category-tree";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { categoryTree } from "#/lib/helper/categories";

export function SidebarCategoryTree() {
  // Use the pre-built hierarchical category tree

  return (
    <Card>
      <CardHeader>
        <CardTitle>Browse Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <CategoryTree categories={categoryTree} />
      </CardContent>
    </Card>
  );
}
