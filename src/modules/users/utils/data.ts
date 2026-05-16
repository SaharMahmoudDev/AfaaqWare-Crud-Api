export const USER_TABLE_ACTIONS = [
  {
    id: 1,
    label: "view",
    variant: "primary",
    action: "onView",
    ariaLabel: "View user",
  },
  {
    id: 2,
    label: "edit",
    variant: "warning",
    action: "onEdit",
    ariaLabel: "Edit user",
  },
  {
    id: 3,
    label: "delete",
    variant: "destructive",
    action: "onDelete",
    ariaLabel: "Delete user",
  },
] as const;
