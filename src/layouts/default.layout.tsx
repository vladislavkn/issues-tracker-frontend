import { Box, Container, Heading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
  navigation?: ReactNode;
  heading: string;
};

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  navigation,
  heading,
}) => {
  return (
    <>
      <Box px={4} py={4}>
        {navigation}
      </Box>
      <Container maxW="xl" paddingBottom={4} as="main">
        <Heading paddingBottom={8}>{heading}</Heading>
        {children}
      </Container>
    </>
  );
};
