import { cn } from "#/lib/utils";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "#/components/ui/input-group";
import { SearchIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchbarProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Searchbar({
  className,
  value,
  onChange,
  placeholder,
}: SearchbarProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localValue !== value) onChange(localValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, value, onChange]);

  const handleClear = () => {
    setLocalValue("");
    onChange("");
  };

  return (
    <InputGroup className={cn("w-full max-w-md", className)}>
      <InputGroupAddon align="inline-start">
        <InputGroupText>
          <SearchIcon className="size-5" />
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder}
      />
      {localValue && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" onClick={handleClear}>
            <XIcon />
            <span className="sr-only">Clear Search</span>
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
