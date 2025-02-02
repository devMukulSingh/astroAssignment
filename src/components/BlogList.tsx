import { BASE_URL_SERVER } from "@/lib/constants";
import BlogPost from "./BlogPost";
import { useQuery } from "@tanstack/react-query";

import { TPost } from "@/lib/types";

type Props = {};

export default function BlogList({}: Props) {
  async function fetchData() {
    const res = await fetch(`${BASE_URL_SERVER}/posts?skip=0`, {
      method: "GET",

    });
    return await res.json();
  }
  const { data } = useQuery<{posts:TPost[]}>({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  return (
    <div className=" flex flex-col gap-5 w-[90vw] items-center">
      {data?.posts?.map((post, index) => (
        <BlogPost post={post} key={index} />
      ))}
    </div>
  );
}
