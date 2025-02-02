import { TPost } from "@/lib/types";
import BlogPost from "./BlogPost";

type Props = {
  paginatedPosts : TPost[] | undefined
};

export default function BlogList({paginatedPosts}: Props) {

  return (
    <div className=" flex flex-col gap-5 w-[90vw] items-center">
      {paginatedPosts?.map((post, index) => (
        <BlogPost post={post} key={index} />
      ))}
    </div>
  );
}
