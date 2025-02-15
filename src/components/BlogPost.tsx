import {  useNavigate } from "react-router-dom";
import { TPost } from "@/lib/types";
import { Button } from "./ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL_SERVER } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  post: TPost;
};

export default function BlogPost({ post }: Props) {
  const navigate = useNavigate()
  const queryClient=  useQueryClient()
  const { mutate,error,isError,isPending } = useMutation({
    mutationKey:['deletPost'],
    mutationFn : async() => {
    await fetch(`${BASE_URL_SERVER}/posts/${post._id}`,{
      method:"DELETE",
    }) 
  },
  onSuccess(){
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  }
}
)

  if(isError){
     console.error('Delete failed',error)
  }
  return (
    <div className=" flex flex-col border gap-5 w-[30rem] py-3  px-5 rounded-md">
  
      <div className="w-2/3 flex gap-2  self-end">

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{post.title}</AccordionTrigger>
            <AccordionContent>{post.description}</AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="ml-auto flex flex-col gap-2">
          <Button disabled={isPending} onClick={() => mutate()}>
            Delete
          </Button>
          <Button
            disabled={isPending}
            onClick={() => navigate(`/update-post/${post._id}`)}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}
