import { BASE_URL_SERVER } from "@/lib/constants";
import { TPost } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import BlogList from "./BlogList";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
type Props = {
  itemsPerPage: number;
};
export default function PaginatedBlogs({ itemsPerPage }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 0);
  async function fetchData() {
    const res = await fetch(`${BASE_URL_SERVER}/posts?skip=${page * 10}`, {
      method: "GET",
    });
    return await res.json();
  }
  const { data } = useQuery<{ totalPosts: number; posts: TPost[] }>({
    queryKey: ["posts", page],
    queryFn: fetchData,
  });

  function handleNext() {
    if (!data?.posts) {
      toast.error("Unable to fetch posts");
      return console.error("data.posts is undefined/null");
    }
    setSearchParams((params) => {
      params.set("page", (page + 1).toString());
      return params;
    });
    setPage((prev) => prev + 1);
  }
  function handlePrevious() {
    if (!data?.posts) {
      toast.error("Unable to fetch posts");
      return console.error("data.posts is undefined/null");
    }
    setSearchParams((params) => {
      params.set("page", (page - 1).toString());
      return params;
    });
    setPage((prev) => prev - 1);
  }
  function onPageClick(selectedPage: number) {
    if (!data?.posts) {
      toast.error("Unable to fetch posts");
      return console.error("data.posts is undefined/null");
    }
    setSearchParams((params) => {
      params.set("page", selectedPage.toString());
      return params;
    });
    setPage(selectedPage);
  }
  if (data?.posts)
    return (
      <div className="flex flex-col gap-5  h-full">
        <BlogList paginatedPosts={data?.posts} />
        <Pagination
          onPageClick={onPageClick}
          page={page}
          onPreviousClick={handlePrevious}
          onNextClick={handleNext}
          totalPages={Math.ceil(data?.totalPosts / itemsPerPage)}
        />
      </div>
    );
}
