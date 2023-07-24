import { createContext } from "react";

export type AuthContext = {
  userEmail?: string;
  token?: string;
  setAuth: (token: string) => void;
};

export const authContext = createContext<AuthContext>({ setAuth: () => {} });
