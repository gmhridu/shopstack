import { cn } from "#/lib/utils";
import { Link } from "@tanstack/react-router";

interface CopyrightProps {
  brand: string;
  legalLinks: Array<{ label: string; to: string }>;
  year?: number;
  className?: string;
}

export function CopyRight({
  brand,
  legalLinks,
  year = new Date().getFullYear(),
  className,
}: CopyrightProps) {
  return (
    <div
      className={cn(
        "flex w-full @6xl:flex-row flex-col items-start justify-between gap-4",
        className,
      )}
    >
      <p className="font-mono text-body-70">
        © {year} {brand}. All rights reserved.
      </p>

      {!!legalLinks.length && (
        <div className="flex flex-wrap items-center gap-3 text-body-70">
          {legalLinks.map((link, index) => (
            <div key={link.label} className="flex items-center gap-3">
              {index > 0 && <span className="text-body-70">|</span>}
              <Link to={link.to} className="hover:text-foreground">
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
