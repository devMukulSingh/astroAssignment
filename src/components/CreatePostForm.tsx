import { createPostSchema } from "@/lib/schema"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { z } from "zod"

type Props = {}

type formValues = z.infer<typeof createPostSchema>

export default function CreatePostForm({}: Props) {
  const form = useForm<formValues>({
    resolver: zodResolver(createPostSchema),
  });
  function onSubmit(data:formValues){
    console.log(data)
  }
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="border p-5 rounded-md w-[30rem]"
    >
      <Form {...form}>
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
      <Button variant={"destructive"}>Submit</Button>
    </form>
  );
}