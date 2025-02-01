import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

type Props = {}

export default function HomeLayout({}: Props) {
  return (
    <div className="h-screen w-full  bg-slate-800 text-white">
        <Header/>
        <Outlet/>
    </div>
  )
}