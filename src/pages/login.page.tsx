import { FC } from "react";
import { DefaultLayout } from "../layouts/default.layout";
import { Box, Button, Heading, Input, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const LoginPage: FC = () => {
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
      <VStack as="form" spacing={8} width="100%" align="flex-start">
        <VStack spacing={4} width="100%" align="flex-start">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </VStack>
        <Box display="flex" justifyContent="flex-end" width="100%">
          <Button type="submit" variant="solid" colorScheme="teal">
            Submit
          </Button>
        </Box>
      </VStack>
    </DefaultLayout>
  );
};
