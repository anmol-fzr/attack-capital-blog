import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FormHeaderProps {
  title: string;
  desc: string;
}

export function FormHeader({ title, desc }: FormHeaderProps) {
  return (
    <CardHeader>
      <CardTitle className="text-2xl animate-in slide-in-from-top">
        {title}
      </CardTitle>
      <CardDescription className="animate-in">{desc}</CardDescription>
    </CardHeader>
  );
}
