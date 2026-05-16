"use client";
import { User, SquarePen } from "@/assets/icons/icons";
import { Card } from "@/shared/components/atoms/Card";
import { IconLabel } from "@/shared/components/molecules/IconLabel";
import { Input } from "@/shared/components/atoms/Input";
import { Button } from "@/shared/components/atoms/Button";

interface UserFormProps {
  mode: "create" | "update";
  values: {
    name: string;
    email: string;
    password?: string;
  };
  isLoading: boolean;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
}

export function UserForm({
  mode,
  onSubmit,
  onChange,
  values,
  isLoading = false,
  disabled,
}: UserFormProps) {
  const isCreate = mode === "create";

  return (
    <Card
      className={`space-y-6 ${isCreate ? "bg-muted" : "bg-form"}`}
      padding="lg"
      shadow="sm"
    >
      <IconLabel
        icon={isCreate ? User : SquarePen}
        title={isCreate ? "Create New User" : "Update User"}
        fillIcon={isCreate}
        variant="info"
        varianTitle="info"
      />

      <form
        className={`${isCreate ? "md:space-x-4 flex flex-col md:flex-row space-y-4 md:space-y-0" : "space-y-4"} `}
        onSubmit={onSubmit}
      >
        <Input
          label="Name"
          placeholder="Enter name"
          value={values.name}
          onChange={onChange}
          name="name"
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
          value={values.email}
          onChange={onChange}
          name="email"
        />

        {isCreate && (
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={values.password}
            onChange={onChange}
            name="password"
          />
        )}

        <Button
          className="md:self-end self-start"
          variant="info"
          type="submit"
          isLoading={isLoading}
          disabled={disabled || isLoading}
        >
          {isCreate ? "Create User" : "Update User"}
        </Button>
      </form>
    </Card>
  );
}
