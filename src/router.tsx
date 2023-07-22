import { Outlet, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/main.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "login",
    element: <div>Login page</div>,
  },
  {
    path: "dashboard/",
    element: (
      <div>
        Dashboard page <Outlet />
      </div>
    ),
    children: [
      {
        path: "",
        element: <div>Display all issues</div>,
      },
      {
        path: ":id",
        element: <div>Display the issue with received id</div>,
      },
    ],
  },
]);
