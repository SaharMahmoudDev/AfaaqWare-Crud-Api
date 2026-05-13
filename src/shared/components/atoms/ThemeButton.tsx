// "use client";

// import { useTheme } from "next-themes";
// import { Sun, Moon } from "@/assets/icons/icons";
// import { useEffect, useState } from "react";
// export function ThemeToggle() {
//   const [mounted, setMounted] = useState(false);

//   const { resolvedTheme, setTheme } = useTheme();

//   const isDark = resolvedTheme === "dark";

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     // <button
//     //   onClick={() => setTheme(isDark ? "light" : "dark")}
//     //   className={`relative flex h-11 w-21 cursor-pointer items-center rounded-full p-1 transition-colors duration-500 md:h-9 md:w-18 ${
//     //     isDark ? "bg-gray-500" : "bg-gray-200"
//     //   } shadow-md`}
//     //   aria-label="Toggle Theme"
//     // >

//   <button
//       onClick={() => setTheme(isDark ? "light" : "dark")}
//       className={`relative bg-transparent  flex cursor-pointer justify-center items-center rounded-md p-1 transition-colors duration-500 h-9 w-9 md:ml-5 ${
//         isDark ? "md:bg-gray-500" : "md:bg-gray-200"
//       } md:shadow-md`}
//       aria-label="Toggle Theme"
//     >

//       {/* <span
//         className={`absolute left-1.5 h-8 w-8 transform rounded-full transition-transform duration-500 md:left-1 md:h-7 md:w-7 ${
//           isDark ? "translate-x-9 ds-bg-dark-gray" : "translate-x-0 bg-white"
//         }`}
//       /> */}

// {/* <span
//   className={`absolute  justify-center left-2 transform text-xs transition-transform duration-500 md:left-1 ${
//      isDark ? "translate-x-10" : "translate-x-1"
//   }`}
// > */}
//   {isDark ? (
//     <Moon className="text-white" />
//   ) : (
//     <Sun className="ds-text-alt " size={16} />
//   )}
// {/* </span> */}
//     </button>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "@/assets/icons/icons";
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
