import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { authContext } from "./auth-context";
import { decodeJWT } from "./decode-jwt";
import { authEvent, authEventBus } from "./auth-event-bus";
import { useToast } from "@chakra-ui/react";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const toast = useToast();

  const onLogin = useCallback((token: string) => {
    const { email } = decodeJWT<{ email: string }>(token);
    setUserEmail(email);
  }, []);

  const onLogout = () => {
    setUserEmail(undefined);
    toast({
      title: "Session is expired",
      status: "info",
      duration: 9000,
    });
  };

  useEffect(() => {
    authEventBus.on(authEvent.LOGOUT, onLogout);
    authEventBus.on(authEvent.LOGIN, onLogin);
  }, []);

  const contextValue = useMemo(() => ({ userEmail }), [userEmail]);

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};
