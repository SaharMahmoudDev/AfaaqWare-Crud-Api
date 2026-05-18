import type { LucideIcon } from "lucide-react";
import { Card } from "../atoms/Card";
import { Icon } from "../atoms/Icon";
import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

type ActionCardVariant = "primary" | "success" | "warning" | "destructive";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonLabel: string;
  variant?: ActionCardVariant;
  onClick?: () => void;
}

export function ActionCard({
  icon,
  title,
  description,
  buttonLabel,
  variant = "primary",
  onClick,
}: ActionCardProps) {
  return (
    <Card interactive className="space-y-3  bg-card/30 transition" padding="sm">
      <div className="flex items-start gap-4">
        <Icon
          icon={icon}
          variant={variant}
          backgroundVariant={variant}
          withBackground
          size="xl"
        />

        <div className="space-y-1">
          <Title size="md">{title}</Title>

          <Text size="sm" variant="muted">
            {description}
          </Text>
        </div>
      </div>

      <Button fullWidth variant={variant} onClick={onClick}>
        {buttonLabel}
      </Button>
    </Card>
  );
}
