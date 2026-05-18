import { forwardRef } from "react";
import { useTranslations } from "next-intl";
import { LoaderCircle, User as IconUser } from "@/assets/icons/icons";
import { Card } from "@/shared/components/atoms/Card";
import { Text } from "@/shared/components/atoms/Text";
import { DetailRow } from "@/shared/components/molecules/DetailRow";
import { IconLabel } from "@/shared/components/molecules/IconLabel";
import { type User } from "@/modules/users/types/users.types";
import { ResetAction } from "@/shared/components/atoms/ResetAction";

interface UserDetailsProps {
  user?: User | null;
  isLoading: boolean;
  resetDetailsUser?: () => void;
}

export const UserDetails = forwardRef<HTMLDivElement, UserDetailsProps>(
  function UserDetails({ user, isLoading, resetDetailsUser }, ref) {
    const t = useTranslations("users");

    return (
      <div ref={ref}>
        <Card className="space-y-6 bg-muted" padding="lg" shadow="sm">
          <div className="w-full flex justify-between items-center">
            <IconLabel
              icon={IconUser}
              title={t("userDetails")}
              variant="primary"
              varianTitle="default"
              fillIcon
            />
            {user && (
              <ResetAction onClick={() => resetDetailsUser?.()}>
                {" "}
                {t("resetDetails")}
              </ResetAction>
            )}
          </div>

          {isLoading ? (
            <LoaderCircle className="size-6 animate-spin mx-auto" />
          ) : user ? (
            <div className="space-y-5">
              <DetailRow label={t("id")} value={String(user.id)} />
              <DetailRow label={t("name")} value={user.name} />
              <DetailRow label={t("email")} value={user.email} />
            </div>
          ) : (
            <Text size="sm" variant="muted">
              {t("selectUser")}
            </Text>
          )}
        </Card>
      </div>
    );
  },
);
