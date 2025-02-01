import CreatePostForm from "@/components/CreatePostForm"

type Props = {}

export default function CreatePost({}: Props) {
  return (
    <div className="py-5 flex w-full items-center justify-center  ">
        <CreatePostForm/>
    </div>
  )
}