import { Users, UserPlus, Settings } from "@/assets/icons/icons";

export const SIDEBAR_LINKS = [
  {
    label: "users",
    href: "/",
    icon: Users,
    fill: true,
  },
  {
    label: "addUser",
    href: "#",
    icon: UserPlus,
    fill: false,
  },
  {
    label: "settings",
    href: "#",
    icon: Settings,
    fill: false,
  },
] as const;