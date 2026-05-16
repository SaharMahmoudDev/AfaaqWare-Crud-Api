import { Card } from "@/shared/components/atoms/Card";
import { Button } from "@/shared/components/atoms/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/atoms/Table";
import { USER_TABLE_ACTIONS } from "@/modules/users/utils/data";

export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

export interface UserTableProps {
  users: User[];
  onView?: (user: User) => void;
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
}

export function UserTable({ users, onView, onEdit, onDelete }: UserTableProps) {
  const handlers = { onView, onEdit, onDelete };
  return (
    <Card padding="none" className="overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary ">
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <TableRow
                key={user.id}
                className={` hover:bg-accent/50 ${index % 2 === 0 ? "bg-card " : "bg-secondary  "}`}
              >
                <TableCell>{user.id}</TableCell>

                <TableCell className="font-medium whitespace-nowrap">
                  {user.name}
                </TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>
                  <div className="flex justify-center items-center gap-4">
                    {USER_TABLE_ACTIONS.map((action) => (
                      <Button
                        key={action.id}
                        variant={action.variant}
                        aria-label={action.ariaLabel}
                        onClick={() => handlers[action.action]?.(user)}
                      >
                        {action.label}
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
                className="py-10 text-center text-muted-foreground"
              >
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
}
