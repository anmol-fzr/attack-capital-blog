import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  desc?: string;
  className?: string;
};

export function PageHeader({ title, desc, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-0.5", className)}>
      <h2 className="animate-in slide-in-from-top text-3xl font-bold tracking-tight">
        {title}
      </h2>
      <p className="text-muted-foreground animate-in fade-in">{desc}</p>
    </div>
  );
}
