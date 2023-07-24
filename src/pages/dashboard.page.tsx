import { Container, Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { DashboardMenu } from "../components/dashboard-menu";

export const DashboardPage: FC = () => {
  return (
    <Container maxW="8xl" as="main" py={8}>
      <Grid templateColumns="8rem 1fr" gap={16}>
        <DashboardMenu />
        <GridItem w="100%">
          <Outlet />
        </GridItem>
      </Grid>
    </Container>
  );
};
