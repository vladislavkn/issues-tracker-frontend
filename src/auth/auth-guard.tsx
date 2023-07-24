import { FC, ReactNode } from "react";
import { useAuth } from "./use-auth";
import { Navigate, useLocation } from "react-router-dom";

type AuthGuardProps = {
  children: ReactNode;
  fallbackUrl?: string;
};

export const AuthGuard: FC<AuthGuardProps> = ({
  children,
  fallbackUrl = "/login",
}) => {
  const { userEmail } = useAuth();
  const location = useLocation();

  if (!userEmail) {
    return <Navigate to={`${fallbackUrl}?redirect=${location.pathname}`} />;
  }

  return children;
};
