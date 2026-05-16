import { Users, UserPlus, Settings } from "@/assets/icons/icons";

export const SIDEBAR_LINKS = [
  {
    label: "Users",
    href: "/",
    icon: Users,
    fill: true,
  },
  {
    label: "Add User",
    href: "#",
    icon: UserPlus,
    fill: false,
  },
  {
    label: "Settings",
    href: "#",
    icon: Settings,
    fill: false,
  },
] as const;