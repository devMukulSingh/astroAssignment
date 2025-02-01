import BlogList from "@/components/BlogList"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"

type Props = {}

export default function Home({}: Props) {

  return (
    <div className="flex py-5 px-5 justify-between ">
      <BlogList/>
      <Link 
      className="h-fit flex gap-1 p-5" 
      to={'/create-blog'} >
        <Plus/>
        Create
      </Link>
    </div>
  )
}