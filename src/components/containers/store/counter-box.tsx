import { CounterItem } from "#/components/base/common/counter-item";

interface CounterItem {
  value: string;
  label: string;
}

interface CounterBoxProps {
  items: CounterItem[];
}

export function CounterBox({ items }: CounterBoxProps) {
  return (
    <div className="grid grid-cols-2">
      {items.map((item, index) => (
        <CounterItem
          key={index}
          value={item.value}
          label={item.label}
          extraTop={index < 2}
        />
      ))}
    </div>
  );
}
