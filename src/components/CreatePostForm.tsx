import { createPostSchema } from "@/lib/schema";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
} from "./ui/form";
import { Button } from "./ui/button";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL_SERVER } from "@/lib/constants";
import TitleField from "./TitleField";
import DescriptionField from "./DescriptionField";


export type formValues = z.infer<typeof createPostSchema>;

export type TForm = UseFormReturn<formValues, unknown, undefined>;

export default function CreatePostForm() {
  const queryClient = useQueryClient()
  const { mutate,isPending } = useMutation({
    mutationKey: ["create-post"],
    mutationFn: async (data: formValues) => {
      await fetch(`${BASE_URL_SERVER}/posts`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess(){
      queryClient.invalidateQueries({queryKey:['posts']})
    }
  });
  const form = useForm<formValues>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      description: "",
      title: "",
    },
  });
  function onSubmit(data: formValues) {
    mutate(data);
    form.reset({description:"",title:""})
  }
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="border  flex flex-col gap-5  p-5 rounded-md w-[30rem]"
    >
      <Form {...form}>
        <TitleField form={form} />
        <DescriptionField form={form} />
      </Form>
      <Button disabled={isPending} variant={"destructive"}>
        Submit
      </Button>
    </form>
  );
}
