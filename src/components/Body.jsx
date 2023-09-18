import Browse from "./Browse";
import Login from "./Login";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>An error occured</p>,
  },
  {
    path: "/browse",
    element: <Browse />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default function Body() {
  return (
    <main className="text-white">
      <RouterProvider router={router} />
    </main>
  );
}
