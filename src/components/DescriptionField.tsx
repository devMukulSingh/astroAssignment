import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { TForm } from "./CreatePostForm";
import { Input } from "./ui/input";

type Props = {
  form: TForm;
};

export default function DescriptionField({ form }: Props) {
  return (
    <FormField
      name="description"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
