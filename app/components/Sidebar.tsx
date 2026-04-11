"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/projects", label: "Projects" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sm:w-32 sm:flex-none">
      <nav className="flex flex-row gap-6 text-sm sm:flex-col sm:gap-3">
        {nav.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group inline-flex w-fit transition-colors"
            >
              <span
                className={`px-1 ${
                  isActive
                    ? "bg-[#d2ff1f] text-foreground"
                    : "text-muted group-hover:text-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
