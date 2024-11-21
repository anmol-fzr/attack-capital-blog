import { buttonVariants } from "../ui";
import { LinkProps as RawLinkProps } from "next/link";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Link as RawLink } from "next-view-transitions";

export interface LinkProps
  extends RawLinkProps,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
}

const Link = ({
  children,
  variant = "link",
  size,
  className,
  ...props
}: LinkProps) => (
  <RawLink
    className={cn(buttonVariants({ variant, size, className }))}
    {...props}
  >
    {children}
  </RawLink>
);

export { Link };
