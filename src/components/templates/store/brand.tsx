import { cn } from "#/lib/utils";
import { Marquee } from "#/components/containers/store/marquee";
import { MarqueeBadge } from "#/components/base/common/marquee-badge";

interface BrandProps {
  className?: string;
}

const brandsCategories = [
  "TANK TOP",
  "T-SHIRT",
  "LONG-SLEEVE TSHIRT",
  "RAGLAN SLEEVE SHIRT",
  "CROP TOP",
  "V-NECK SHIRT",
  "MUSCLE SHIRT",
];

export function Brand({ className }: BrandProps) {
  return (
    <section className={cn(className)}>
      <Marquee
        items={brandsCategories.map((c, index) => (
          <MarqueeBadge key={`${c}-${index}`} label={c} />
        ))}
        speed="slow"
        className="border-t-2"
      />
    </section>
  );
}
