import { FC, ReactNode, useCallback, useMemo, useState } from "react";
import { authContext } from "./auth-context";
import { decodeJWT } from "./decode-jwt";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);

  const setAuth = useCallback((token: string) => {
    const { email } = decodeJWT<{ email: string }>(token);
    setUserEmail(email);
    setToken(token);
  }, []);

  const contextValue = useMemo(
    () => ({ userEmail, token, setAuth }),
    [userEmail, token, setAuth]
  );

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};
