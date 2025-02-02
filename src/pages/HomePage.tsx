import PaginatedBlogs from "@/components/PaginatedBlogs";
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"


export default function Home( ) {
  return (
    <div className="flex flex-col min-h-[calc(100vh-5rem)] py-5 px-5 justify-between ">
      <div className="flex  h-full">
        <PaginatedBlogs itemsPerPage={10} />
        <Link className="h-fit flex gap-1 p-5" to={"/create-post"}>
          <Plus />
          Create
        </Link>
      </div>
    </div>
  );
}