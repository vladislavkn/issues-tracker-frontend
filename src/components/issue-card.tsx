import { FC } from "react";
import { IssueDto } from "../dto/issue.dto";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  HStack,
  Heading,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";

type IssueCardProps = {
  issue: IssueDto;
};

export const IssueCard: FC<IssueCardProps> = ({ issue }) => {
  return (
    <Card>
      <CardHeader pb={2}>
        <HStack alignItems="center" gap={2}>
          {issue.satisfied ? (
            <CheckCircleIcon color="green" />
          ) : (
            <WarningIcon color="orange" />
          )}
          <Heading size="xs">{issue.subject}</Heading>
        </HStack>
      </CardHeader>
      <CardBody py={0}>
        <Text fontSize="md" noOfLines={2}>
          {issue.body}
        </Text>
      </CardBody>
      <CardFooter>
        <Text fontSize="xs">
          {new Date(issue.dateCreated).toLocaleDateString("de")}
        </Text>
      </CardFooter>
    </Card>
  );
};
