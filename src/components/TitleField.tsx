import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import {  TForm } from './CreatePostForm';
import { Input } from './ui/input';

type Props = {
  form:TForm
};

export default function TitleField({
    form
}: Props) {
  return (
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
  );
}