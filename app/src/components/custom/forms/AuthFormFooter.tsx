import Link, { LinkProps } from "next/link";

interface AuthFormFooterProps {
  message: string;
  title: string;
  href: LinkProps["href"];
}

export function AuthFormFooter({ message, title, href }: AuthFormFooterProps) {
  return (
    <div className="mt-4 text-center text-sm">
      {message}{" "}
      <Link href={href} className="underline">
        {title}
      </Link>
    </div>
  );
}
