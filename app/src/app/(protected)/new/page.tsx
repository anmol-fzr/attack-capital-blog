"use client";

import { Button, extensions, GoBack, PageHeader } from "@/components";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import * as API from "@/services";
import { toast } from "sonner";
import { BlogEditor } from "@/components";
import { useEditor } from "@tiptap/react";

const id = "new_post_form";

function removeFirstH1(inputString: string) {
  const regex = /<h1>.*?<\/h1>/i;

  const resultString = inputString.replace(regex, "");

  return resultString;
}

export default function NewPostPage() {
  const router = useRouter();

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

  const editor = useEditor({
    extensions: extensions,
    editable: !isPending,
    immediatelyRender: false,
  });

  const onSubmit = () => {
    toast.loading("Publishing Post ...", { id });

    const editorText = editor?.getText();
    const htmlContent = editor?.getHTML();

    if (!editorText || !htmlContent) {
      return toast.error("Add Some Blog Content");
    }

    const [title, ...body] = editorText?.split("\n");

    const desc = body.join(" ")?.slice(1, 300);
    const content = removeFirstH1(htmlContent);

    mutate({ title, content, desc });
  };

  return (
    <div>
      <GoBack href="/dashboard" />
      <div className="space-y-2 mt-2">
        <PageHeader title="Create New Post" desc="" className="ml-4" />
        <div className="p-4 space-y-4">
          <BlogEditor editor={editor} />
          <Button type="button" onClick={onSubmit}>
            Publish Now
          </Button>
        </div>
      </div>
    </div>
  );
}
