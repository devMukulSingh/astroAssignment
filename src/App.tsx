import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/HomePage";
import Blog from "./pages/Blog";
import HomeLayout from "./layouts/HomeLayou";
import CreatePost from "./pages/CreatePost";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path=":id/" element={<Blog />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
