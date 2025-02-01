import { Link } from "react-router-dom";

type Props = {
  blog:{
    title:string,
    description:string,
    createdAt:string,
    id:string
  }
}

export default function BlogPost({blog}: Props) {
  return (
    <Link to={`/${blog.id}`} className="text-center flex flex-col border gap-5 w-[30rem] p-5 rounded-md">
      <h1>{blog.title}</h1>
      <h1>{blog.createdAt}</h1>
    </Link >
  );
}