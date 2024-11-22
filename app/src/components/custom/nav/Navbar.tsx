"use client";
import Image from "next/image";
import { Button, Link } from "@/components";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { logout } from "@/config";
import { useIsLogin } from "@/hooks";

const links = [
  {
    text: "home",
    href: "/",
  },
  {
    text: "dashboard",
    href: "/dashboard",
  },
];

export function Navbar() {
  const currPath = usePathname();
  const isLogin = useIsLogin();

  return (
    <nav className="p-4 px-4 border-b flex items-center justify-between sticky top-0 backdrop-blur !z-[5]">
      <Link href="/#">
        <Image src="/logo.png" alt="Logo" width={240} height={55} />
      </Link>
      {isLogin ? (
        <div className="flex gap-2">
          {links.map(({ text, href }) => (
            <Link
              href={href}
              key={href}
              variant={currPath === href ? "link" : "link"}
              className={`capitalize `}
            >
              {text}
            </Link>
          ))}
          <Button size="icon" onClick={logout} variant="outline">
            <LogOut />
          </Button>
        </div>
      ) : (
        <Link href="/login" variant="default" prefetch>
          Login
        </Link>
      )}
    </nav>
  );
}
