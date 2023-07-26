import { FC } from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

type IssueStatusIconProps = {
  satisfied: boolean;
};

export const IssueStatusIcon: FC<IssueStatusIconProps> = ({ satisfied }) => {
  return satisfied ? (
    <CheckCircleIcon color="green" />
  ) : (
    <WarningIcon color="orange" />
  );
};
