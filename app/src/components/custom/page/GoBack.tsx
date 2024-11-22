import { Link, type LinkProps } from "@/components";
import { ChevronLeft } from "lucide-react";

type GoBackProps = Omit<LinkProps, "children">;

export function GoBack(props: GoBackProps) {
  return (
    <Link {...props} className="animate-in slide-in-from-left fade-in-75">
      <ChevronLeft />
      Go Back
    </Link>
  );
}
