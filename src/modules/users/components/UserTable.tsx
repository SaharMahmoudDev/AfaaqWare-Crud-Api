import { forwardRef, useState } from "react";
import { useTranslations } from "next-intl";
import { LoaderCircle } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";
import { Button } from "@/shared/components/atoms/Button";
import { Card } from "@/shared/components/atoms/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/atoms/Table";
import { type User } from "@/modules/users/types/users.types";
import { USER_TABLE_ACTIONS } from "@/modules/users/utils/data";

export interface UserTableProps {
  users: User[];
  isLoading: boolean;
  deletingUserId?: number | null;
  onView?: (user: User) => void;
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
}

export const UserTable = forwardRef<HTMLDivElement, UserTableProps>(
  function UserTable(
    { users, isLoading, deletingUserId, onView, onEdit, onDelete },
    ref,
  ) {
    const t = useTranslations("users");

    const handlers = {
      onView,
      onEdit,
      onDelete,
    };

    const [selectedRowId, setSelectedRowId] = useState<number | null>(null);

    return (
      <div ref={ref}>
        <Card padding="none" className="overflow-hidden max-w-full">
          {users ? (
            <Table
              className={`w-full ${
                isLoading || (users.length === 0 && !isLoading)
                  ? "min-w-full"
                  : "min-w-175"
              } caption-bottom text-md`}
            >
              <TableHeader>
                <TableRow className="bg-secondary">
                  <TableHead>{t("id")}</TableHead>
                  <TableHead>{t("name")}</TableHead>
                  <TableHead>{t("email")}</TableHead>
                  <TableHead className="text-center">{t("actions")}</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {users.length > 0 && !isLoading ? (
                  users.map((user, index) => (
                    <TableRow
                      key={user.id}
                      onClick={() => setSelectedRowId(user.id)}
                      className={cn(
                        "hover:bg-accent/20 cursor-pointer",
                        index % 2 === 0 ? "bg-card" : "bg-secondary",
                        selectedRowId === user.id &&
                          "bg-accent dark:bg-accent/50",
                      )}
                    >
                      <TableCell>{user.id}</TableCell>

                      <TableCell className="min-w-[200px] font-medium ">
                        {user.name}
                      </TableCell>

                      <TableCell>{user.email}</TableCell>

                      <TableCell>
                        <div className="flex justify-center items-center gap-4">
                          {USER_TABLE_ACTIONS.map((action) => (
                            <Button
                              key={action.id}
                              size="sm"
                              variant={action.variant}
                              isLoading={isLoading}
                              aria-label={t(action.label)}
                              onClick={() => {
                                handlers[action.action]?.(user);
                              }}
                              disabled={
                                action.action === "onDelete" &&
                                user.id === deletingUserId
                              }
                            >
                              {t(action.label)}
                            </Button>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className={`w-full ${isLoading?"h-100":"h-50"} text-center text-muted-foreground`}
                    >
                      {isLoading ? (
                        <LoaderCircle className="size-6 animate-spin mx-auto" />
                      ) : (
                        t("empty")
                      )}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          ) : (
            <div className="py-10 text-center text-muted-foreground">
              {t("empty")}
            </div>
          )}
        </Card>
      </div>
    );
  },
);
