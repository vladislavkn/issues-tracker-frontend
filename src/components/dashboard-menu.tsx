import { GridItem, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { DashboardMenuLink } from "./dashboard-menu-link";
import { EmailIcon, AtSignIcon, ArrowBackIcon } from "@chakra-ui/icons";

export const DashboardMenu: FC = () => (
  <GridItem w="100%">
    <VStack align="stretch" gap={2}>
      <DashboardMenuLink to="/" icon={<ArrowBackIcon />} title="Issue form" />
      <DashboardMenuLink to="/dashboard" icon={<EmailIcon />} title="Issues" />
      <DashboardMenuLink
        to="/dashboard/accounts"
        icon={<AtSignIcon />}
        title="Accounts"
      />
    </VStack>
  </GridItem>
);
