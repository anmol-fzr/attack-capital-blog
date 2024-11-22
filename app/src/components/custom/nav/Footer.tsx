import { Separator } from "@/components/ui";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer() {
  return (
    <div className="py-4 mb-4 max-w-theme dead-center w-full relative">
      <Link
        className="absolute px-4 bg-background"
        href="https://github.com/anmol-fzr/attack-capital-blog"
        target="_blank"
      >
        <GitHubLogoIcon width={24} height={24} />
      </Link>
      <Separator />
    </div>
  );
}
