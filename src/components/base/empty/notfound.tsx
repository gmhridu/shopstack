import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "#/components/ui/empty";
import { cn } from "#/lib/utils";
import { SearchXIcon } from "lucide-react";

interface NotFoundProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function NotFound({
  title,
  description,
  icon,
  className,
  children,
}: NotFoundProps) {
  return (
    <Empty className={cn("py-20", className)}>
      <EmptyHeader>
        <EmptyMedia>
          {icon || <SearchXIcon className="size-10 text-muted-foreground" />}
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
      {children && <EmptyContent>{children}</EmptyContent>}
    </Empty>
  );
}
