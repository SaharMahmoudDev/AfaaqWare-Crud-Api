import { User } from "@/assets/icons/icons";
import { Card } from "@/shared/components/atoms/Card";
import { Text } from "@/shared/components/atoms/Text";
import { DetailRow } from "@/shared/components/molecules/DetailRow";
import { IconLabel } from "@/shared/components/molecules/IconLabel";

interface UserDetailsProps {
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export function UserDetails({ user }: UserDetailsProps) {
  return (
    <Card className="space-y-6 w-fit bg-muted" padding="lg" shadow="sm">
      <IconLabel
        icon={User}
        title="User Details"
        variant="primary"
        varianTitle="default"
        fillIcon
      />

      {user ? (
        <div className="space-y-5">
          <DetailRow label="ID" value={user.id} />
          <DetailRow label="Name" value={user.name} />
          <DetailRow label="Email" value={user.email} />
        </div>
      ) : (
        <Text className="text-sm text-muted-foreground">
          Select a user to view details.
        </Text>
      )}
    </Card>
  );
}
