import { FC, ReactNode } from "react";
import { useAuth } from "./use-auth";
import { Navigate } from "react-router-dom";

type AuthGuardProps = {
  children: ReactNode;
  fallbackUrl?: string;
};

export const AuthGuard: FC<AuthGuardProps> = ({
  children,
  fallbackUrl = "/login",
}) => {
  const { userEmail } = useAuth();

  if (!userEmail) {
    return <Navigate to={fallbackUrl} />;
  }

  return children;
};
