"use client";
import {
  Button,
  extensions,
  Form,
  FormInput,
  Link,
  PageHeader,
} from "@/components";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createPostSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import * as API from "@/services";
import { toast } from "sonner";
import { BlogEditor } from "@/components";
import { Extension, useEditor } from "@tiptap/react";

const id = "new_post_form";

const title = "Beginners Guide to astro's View Transition API";
const content = `View Transitions API
What is View Transitions API
The View Transitions API provides a mechanism for easily creating animated transitions between different DOM states while also updating the DOM contents in a single step.

View Transitions in astro
Astro supports opt-in, per-page, view transitions with just a few lines of code. View transitions update your page content without the browser’s normal, full-page navigation refresh and provide seamless animations between pages.

Basic View Transitions in astro

---
import { ViewTransitions } from "astro:transitions";
---

<!doctype html>
<html lang="en">
  <head>
    <!-- meta tags -->
    <ViewTransitions />
  </head>
</html>

Now we have add the Transition Directives to our component. Lets say we want to transition a image from a blog post card to that blog post

Blog Post Card
<img transition:name={"image"+title} class="w-full group-hover:rounded-xl group-hover:scale-[1.04] rounded-t-2xl" src={heroImage} alt={title} />
Blog Post
<img transition:name={"image"+title} width={1020} height={510} class="w-full md:w-10/12 mx-auto rounded-2xl"src={heroImage} alt={title} />
Conclusion
View transitions bring a native feel to the web, and with Astro being the first major web framework to support them, you can start building arguably better transitions today. `;

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
      content,
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
      <Link href="/dashboard">
        <ChevronLeft />
        Go Back
      </Link>
      <div className="space-y-2 mt-4">
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
