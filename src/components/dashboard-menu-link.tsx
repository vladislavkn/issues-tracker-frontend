import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type DashboardMenuLinkProps = {
  title: string;
  to: string;
  icon?: ReactNode;
};

export const DashboardMenuLink: FC<DashboardMenuLinkProps> = ({
  title,
  to,
  icon,
}) => (
  <Link to={to}>
    <Button
      fontWeight="normal"
      variant="ghost"
      justifyContent="flex-start"
      gap={2}
    >
      {icon}
      {title}
    </Button>
  </Link>
);
