import { Outlet, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main page</div>,
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
