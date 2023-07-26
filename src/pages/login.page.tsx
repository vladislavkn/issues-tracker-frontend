import { FC, useEffect } from "react";
import { DefaultLayout } from "../layouts/default.layout";
import { Box, Button, useToast } from "@chakra-ui/react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { LoginForm } from "../components/login-form";
import { login } from "../api/login.api";
import { LoginDto } from "../dto/login.dto";
import { useAuth } from "../auth/use-auth";
import { authEvent, authEventBus } from "../auth/auth-event-bus";

export const LoginPage: FC = () => {
  const toast = useToast();
  const { userEmail } = useAuth();

  const handleLogin = async (loginDto: LoginDto) => {
    try {
      const loginResponse = await login(loginDto);
      const accessToken = loginResponse.data.accessToken;
      if (loginResponse.status !== 200 || !accessToken) {
        throw new Error("Login failed");
      }
      authEventBus.emit(authEvent.LOGIN, accessToken);
    } catch (e) {
      console.error(e);
      toast({
        title: "Some error occured",
        status: "error",
        duration: 9000,
      });
    }
  };

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userEmail) {
      let redirectUrl = searchParams.get("redirect");
      if (!redirectUrl) {
        redirectUrl = "/dashboard";
      }

      navigate(redirectUrl);
    }
  }, [userEmail]);

  return (
    <DefaultLayout
      heading="Login"
      navigation={
        <Box display="flex" justifyContent="flex-end">
          <Link to="/">
            <Button variant="ghost">Back to issue submitting</Button>
          </Link>
        </Box>
      }
    >
      <LoginForm onSubmit={handleLogin} />
    </DefaultLayout>
  );
};
