import { Pagination } from "@/shared/components/molecules/Pagination";
import { UserTable } from "../components/UserTable";
import { type User } from "@/modules/users/types/users.types";
import { Card } from "@/shared/components/atoms/Card";
import type { RefObject } from "react";

interface UsersTableSectionProps {
  users: User[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  deletingUserId?: number | null;
  tableRef?: RefObject<HTMLDivElement | null>;
  onPageChange: (page: number) => void;
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export function UsersTableSection({
  users,
  currentPage,
  totalPages,
  isLoading,
  tableRef,
  deletingUserId,
  onPageChange,
  onView,
  onEdit,
  onDelete,
}: UsersTableSectionProps) {
  return (
    <Card className="space-y-4 min-w-0">
      <UserTable
        ref={tableRef}
        users={users}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
        isLoading={isLoading}
        deletingUserId={deletingUserId}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Card>
  );
}
