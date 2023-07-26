import { createContext } from "react";

export type AuthContext = {
  userEmail?: string;
};

export const authContext = createContext<AuthContext>({});
