import { Text } from "../atoms/Text";
import { Title } from "../atoms/Title";

export function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string|number;
}) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-4 text-sm">
      <Title className="font-medium text-secondary-foreground" size="md">{label}</Title>
      <Text  variant="muted" className="break-all">{value} </Text>
    </div>
  );
}