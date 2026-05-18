import { Users, User, UserPlus, Trash2 } from "@/assets/icons/icons";

export const DASHBOARD_CARDS = [
  {
    id: 1,
    icon: Users,
    variant: "primary",
    translationKey: "allUsers",
  },
  {
    id: 2,
    icon: User,
    variant: "success",
    translationKey: "viewUser",
  },
  {
    id: 3,
    icon: UserPlus,
    variant: "warning",
    translationKey: "createUser",
  },
  {
    id: 4,
    icon: Trash2,
    variant: "destructive",
    translationKey: "deleteUser",
  },
] as const;

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

export const INITIAL_UPDATE_VALUES = {
  name: "",
  email: "",
};

export const INITIAL_CREATE_VALUES = {
  name: "",
  email: "",
  password: "",
};
