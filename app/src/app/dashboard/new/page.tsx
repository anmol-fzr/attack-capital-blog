"use client";

import {
  Button,
  extensions,
  Form,
  FormInput,
  GoBack,
  PageHeader,
} from "@/components";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createPostSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import * as API from "@/services";
import { toast } from "sonner";
import { BlogEditor } from "@/components";
import { Extension, useEditor } from "@tiptap/react";

const id = "new_post_form";

const title = "Beginners Guide to astro's View Transition API";

export default function NewPostPage() {
  const router = useRouter();

  const editor = useEditor({
    extensions: extensions as Extension[],
    immediatelyRender: false,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: API.POST.CREATE,
    onError(err) {
      toast.error(err.message, { id });
    },
    onSuccess(res) {
      router.push("/dashboard");
      toast.success(res.message, { id });
    },
  });

  const methods = useForm({
    resolver: zodResolver(createPostSchema),
    disabled: isPending,
    defaultValues: {
      title,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(({ title }) => {
    toast.loading("Publishing Post ...", { id });
    const desc = editor?.getText().slice(0, 300);
    const content = editor?.getHTML();
    if (!content) {
      return toast.error("Add Some Blog Content");
    }

    mutate({ title, content, desc });
  });

  return (
    <div>
      <GoBack href="/dashboard" />
      <div className="space-y-2 mt-2">
        <PageHeader title="Create New Post" desc="" className="ml-4" />
        <div className="p-4">
          <Form {...methods}>
            <form onSubmit={onSubmit} className="space-y-4">
              <FormInput
                name="title"
                label="Title"
                placeholder="View Transition API in astro"
              />

              <BlogEditor editor={editor} />

              <Button type="submit">Publish Now</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
