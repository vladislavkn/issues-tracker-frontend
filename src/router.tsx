import { Outlet, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/main.page";
import { AuthGuard } from "./auth/auth-guard";
import { LoginPage } from "./pages/login.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "dashboard/",
    element: (
      <AuthGuard>
        Dashboard page <Outlet />
      </AuthGuard>
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
