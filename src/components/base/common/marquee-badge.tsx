import StarburstIcon from "#/components/ui/icons/starburst-icon";

interface MarqueeBadgeProps {
  label: string;
}

export function MarqueeBadge({ label }: MarqueeBadgeProps) {
  return (
    <span className="flex items-center @5xl:gap-4 gap-3">
      <StarburstIcon className="@5xl:size-12.5 @7xl:size-15 size-10 text-primary" />
      <span className="@5xl:text-2xl @7xl:text-3xl text-body-20 text-xl uppercase">
        {label}
      </span>
    </span>
  );
}
