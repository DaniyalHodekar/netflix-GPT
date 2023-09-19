import Browse from "./components/Browse";
import Login from "./components/Login";
import Home from "./components/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import store from "./utils/appStore";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <p>An error occured</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </Provider>
  );
}

export default App;
