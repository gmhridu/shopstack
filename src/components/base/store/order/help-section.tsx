import { MailIcon, PhoneIcon } from "lucide-react";

export function HelpSection() {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg">Need help?</h3>
      <div className="space-y-2">
        <a
          href="mailto:customercare@asoom.com"
          className="flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          <MailIcon className="size-4" />
          <span>customercare@asoom.com</span>
        </a>

        <a
          href="tel:+18256654"
          className="flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          <PhoneIcon className="size-4" />
          <span>+1 8256 6546</span>
        </a>
      </div>
    </div>
  );
}
