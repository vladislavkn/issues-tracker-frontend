import {
  VStack,
  Input,
  Button,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginDto } from "../dto/login.dto";

type LoginFormProps = {
  onSubmit: (loginDto: LoginDto) => void;
};

export const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<LoginDto>();

  const [passwordShown, setPasswordShown] = useState(false);
  const handleTogglePassword = () => setPasswordShown((prev) => !prev);

  return (
    <VStack
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      spacing={8}
      width="100%"
      align="flex-start"
    >
      <VStack spacing={4} width="100%" align="flex-start">
        <Input
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
              {passwordShown ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </VStack>
      <Box display="flex" justifyContent="flex-end" width="100%">
        <Button type="submit" variant="solid" colorScheme="teal">
          Submit
        </Button>
      </Box>
    </VStack>
  );
};
