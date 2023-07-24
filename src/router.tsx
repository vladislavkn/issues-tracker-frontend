import { Outlet, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/main.page";
import { AuthGuard } from "./auth/auth-guard";
import { LoginPage } from "./pages/login.page";
import { DashboardPage } from "./pages/dashboard.page";
import { IssuesPage } from "./pages/issues.page";

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
        <DashboardPage />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <IssuesPage />,
      },
      {
        path: "accounts",
        element: <div>Display all acccounts</div>,
      },
      {
        path: ":id",
        element: <div>Display the issue with received id</div>,
      },
    ],
  },
]);
