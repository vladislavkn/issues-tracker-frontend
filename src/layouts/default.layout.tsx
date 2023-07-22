import { Box, Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
  navigation?: ReactNode;
};

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  navigation,
}) => {
  return (
    <>
      <Box px={4} py={4}>
        {navigation}
      </Box>
      <Container maxW="xl" paddingBottom={4} as="main">
        {children}
      </Container>
    </>
  );
};
