"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type IconProps = { className?: string; isFilled: boolean };

function HomeIcon({ className, isFilled }: IconProps) {
  if (isFilled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.69-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75H5.625M5.625 21.75c-1.036 0-1.875-.84-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function FavoriteIcon({ className, isFilled }: IconProps) {
  if (isFilled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function OrdersIcon({ className, isFilled }: IconProps) {
  if (isFilled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0h.25A2.25 2.25 0 0119 8.25v10.5A2.25 2.25 0 0116.75 21H7.25A2.25 2.25 0 015 18.75V8.25A2.25 2.25 0 017.25 6H7.5zm9.5 0a3 3 0 10-6 0h6z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ChatIcon({ className, isFilled }: IconProps) {
  if (isFilled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path
          fillRule="evenodd"
          d="M4.804 21.644A.75.75 0 005.75 21v-1.126a19.464 19.464 0 004.811.626c5.247 0 9.5-3.693 9.5-8.25s-4.253-8.25-9.5-8.25-9.5 3.693-9.5 8.25c0 2.28 1.066 4.35 2.8 5.864a.75.75 0 00.243.553l-.95 1.558z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function AccountIcon({ className, isFilled }: IconProps) {
  if (isFilled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path
          fillRule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12c0 2.748 1.14 5.232 2.977 7.03.04.04.079.08.118.122a9.716 9.716 0 0113.224-.04c.04-.042.08-.081.12-.122zM12 9.75a3 3 0 100-6 3 3 0 000 6zm-6.513 8.36a7.5 7.5 0 0113.026 0 7.478 7.478 0 01-13.026 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function MobileNavMenu() {
  const pathname = usePathname();
  const navItemMenu = [
    { icon: HomeIcon, title: "خانه", path: "/" },
    { icon: FavoriteIcon, title: "مورد علاقه ها", path: "" },
    { icon: OrdersIcon, title: "سفر های من", path: "" },
    { icon: ChatIcon, title: "چت", path: "" },
    { icon: AccountIcon, title: "حساب من", path: "" },
  ];
  return (
    <div className="fixed flex justify-center items-center bottom-0 right-0 h-16 w-full bg-white z-40 lg:hidden">
      {navItemMenu.map((item, i) => {
        return (
          <Link
            href="#"
            className="flex grow flex-col justify-center items-center text-sm gap-2"
            key={i}
          >
            <item.icon className="h-6 w-6" isFilled={pathname === item.path} />
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}
