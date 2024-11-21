import { Form, Button, FormInput } from "@/components";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

type AuthFormProps<T extends FieldValues> = {
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  isPending: boolean;
  btnTitle: string;
};

export function AuthForm<T extends FieldValues>(props: AuthFormProps<T>) {
  const { methods, onSubmit, isPending, btnTitle } = props;
  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-4">
        <FormInput
          name="email"
          type="email"
          label="Email address"
          placeholder="user@email.in"
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="*** ***"
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {btnTitle}
        </Button>
      </form>
    </Form>
  );
}
