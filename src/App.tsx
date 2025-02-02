import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/HomePage";
import Blog from "./pages/Blog";
import HomeLayout from "./layouts/HomeLayout";
import CreatePost from "./pages/CreatePost";
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import toast, {Toaster} from "react-hot-toast"
import UpdatePost from "./pages/UpdatePost";

function App() {
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    },
    mutations:{
      onError(error) {
          toast.error('Something went wrong')
          console.error(error)
      },
    }
  }
});


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path=":id/" element={<Blog />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:id" element={<UpdatePost />} />
      </Route>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
