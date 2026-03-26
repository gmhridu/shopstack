import { cn } from "#/lib/utils";
import { Link } from "@tanstack/react-router";

interface NavItem {
  label: string;
  to: string;
}

interface NavbarProps {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
}

export function Navbar({
  items,
  className = "hidden items-center gap-6 text-sm @5xl:flex",
  linkClassName = "",
  activeLinkClassName = "",
}: NavbarProps) {
  return (
    <nav className={cn(className)}>
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={cn(
            "flex @7xl:h-12 items-center justify-center rounded-xl border border-dashed bg-transparent px-7.5 text-lg transition-all hover:border-transparent hover:bg-primary hover:text-background dark:text-body-70 dark:hover:text-background",
            linkClassName,
            // {
            //   [activeLinkClassName]: location.pathname === item.to,
            // },
          )}
          activeProps={{
            className: cn(
              "@7xl:h-12 h-10 rounded-xl text-lg px-7.5 bg-foreground! text-background border-transparent dark:bg-body-10! hover:dark:text-foreground",
              activeLinkClassName,
            ),
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
