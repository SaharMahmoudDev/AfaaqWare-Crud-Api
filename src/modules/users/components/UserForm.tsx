"use client";

import { forwardRef } from "react";
import { useTranslations } from "next-intl";

import { User, SquarePen } from "@/assets/icons/icons";
import { Card } from "@/shared/components/atoms/Card";
import { Input } from "@/shared/components/atoms/Input";
import { Button } from "@/shared/components/atoms/Button";
import { IconLabel } from "@/shared/components/molecules/IconLabel";
import { ResetAction } from "@/shared/components/atoms/ResetAction";
import { hasValues } from "@/shared/utils/hasValues";

interface UserFormProps {
  mode: "create" | "update";

  values: {
    name: string;
    email: string;
    password?: string;
  };

  isLoading: boolean;
  disabled: boolean;
  resetForm?: () => void;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
}

export const UserForm = forwardRef<HTMLDivElement, UserFormProps>(
  function UserForm(
    {
      mode,
      onSubmit,
      onChange,
      values,
      resetForm,
      isLoading = false,
      disabled,
    },
    ref,
  ) {
    const t = useTranslations("users");

    const hasValue = hasValues(values);

    const isCreate = mode === "create";

    return (
      <div ref={ref}>
        <Card className="space-y-6 bg-card" padding="lg" shadow="sm">
          <div className="w-full flex justify-between items-center">
            <IconLabel
              icon={isCreate ? User : SquarePen}
              title={isCreate ? t("createNewUser") : t("updateUser")}
              fillIcon={isCreate}
              variant="info"
              varianTitle="info"
            />
            {hasValue && (
              <ResetAction onClick={() => resetForm?.()}>
                {" "}
                {t("resetDetails")}
              </ResetAction>
            )}
          </div>
          <form
            className={
              isCreate
                ? "md:space-x-4 flex flex-col md:flex-row space-y-4 md:space-y-0"
                : "space-y-4"
            }
            onSubmit={onSubmit}
          >
            <Input
              label={t("name")}
              placeholder={t("namePlaceholder")}
              value={values.name}
              onChange={onChange}
              name="name"
              required={isCreate}
            />

            <Input
              type="email"
              label={t("email")}
              placeholder={t("emailPlaceholder")}
              value={values.email}
              onChange={onChange}
              name="email"
              required={isCreate}
            />

            {isCreate && (
              <Input
                type="password"
                label={t("password")}
                placeholder={t("passwordPlaceholder")}
                value={values.password}
                onChange={onChange}
                name="password"
                required
              />
            )}

            <Button
              className="md:self-end self-start"
              variant="info"
              type="submit"
              isLoading={isLoading}
              disabled={disabled || isLoading}
            >
              {isCreate ? t("createUser") : t("updateUser")}
            </Button>
          </form>
        </Card>
      </div>
    );
  },
);
