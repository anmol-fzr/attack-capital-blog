"use client";
import { FormDescription, FormLabel, FormMessage } from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { FormError } from "./FormError";

type FormInputProps = InputProps & {
  label: string;
  name: string;
  desc?: string;
};

const FormInput = ({ label, name, desc, ...props }: FormInputProps) => {
  const { register, formState } = useFormContext();
  const error = formState.errors[name]?.message?.toString();

  return (
    <div className="flex flex-col gap-2 w-full">
      <FormLabel>{label}</FormLabel>
      <Input {...register(name)} {...props} />
      {desc && <FormDescription>{desc}</FormDescription>}
      {error && <FormError>{error}</FormError>}
      <FormMessage />
    </div>
  );
};

export { FormInput };
