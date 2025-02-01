import BlogPost from "./BlogPost";

type Props = {}

export default function BlogList({}: Props) {
    const blogs = [
      {
        title: "BlogTitle",
        description: "BlogDescription",
        createdAt: "12/12/21",
        id: '1',
      },
      {
        title: "BlogTitle",
        description: "BlogDescription",
        createdAt: "12/12/21",
        id: '2',
      },
      {
        title: "BlogTitle",
        description: "BlogDescription",
        createdAt: "12/12/21",
        id: '3',
      },
    ];
  return (
    <div className=" flex flex-col gap-5 w-[90vw] items-center">
      {
        blogs.map( (blog,index) => (
          <BlogPost blog={blog} key={index}/>
        ))
      }
    </div>
  )
}