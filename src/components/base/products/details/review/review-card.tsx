import { cn } from "#/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { StarIcon } from "lucide-react";

interface ReviewCardProps {
  userName: string;
  userAvatar: string;
  date: string;
  rating: number;
  reviewText: string;
  className?: string;
}

export function ReviewCard({
  userName,
  userAvatar,
  date,
  rating,
  reviewText,
  className,
}: ReviewCardProps) {
  return (
    <div className={cn("flex gap-4 border-b py-6 last:border-0", className)}>
      <Avatar className="size-10">
        <AvatarImage src={userAvatar} alt={userName} />
        <AvatarFallback>{userName[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-foreground">{userName}</h4>
            <p className="text-muted-foreground text-xs">{date}</p>
          </div>

          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={cn(
                  "size-3.5",
                  i < rating ? "fill-current" : "text-muted",
                )}
              />
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {reviewText}
        </p>
      </div>
    </div>
  );
}
