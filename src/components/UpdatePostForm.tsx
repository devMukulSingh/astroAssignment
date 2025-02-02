import { createPostSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { z } from "zod";
import { TPost } from "@/lib/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BASE_URL_SERVER } from "@/lib/constants";
import { useNavigate, useParams } from "react-router-dom";
import TitleField from "./TitleField";
import DescriptionField from "./DescriptionField";

type Props = {
  initialFormData?: TPost;
};

type formValues = z.infer<typeof createPostSchema>;

export default function UpdatePostForm({}: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { data } = useQuery<{ posts: TPost[] }>({ queryKey: ["posts"] });
  const initialFormData = data?.posts.find((post) => post._id === id);

  const { mutate,isPending } = useMutation({
    mutationKey: ["update-post"],
    mutationFn: async (data: formValues) => {
      await fetch(`${BASE_URL_SERVER}/posts/${initialFormData?._id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });
  const form = useForm<formValues>({
    resolver: zodResolver(createPostSchema),
    defaultValues: initialFormData ?? {
      description: "",
      title: "",
    },
  });
  function onSubmit(data: formValues) {
    mutate(data);
  }
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="border p-5 flex flex-col gap-5 rounded-md w-[30rem]"
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
