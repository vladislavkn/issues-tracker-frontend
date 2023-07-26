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
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

type IssueCardProps = {
  issue: IssueDto;
};

export const IssueCard: FC<IssueCardProps> = ({ issue }) => {
  return (
    <LinkBox>
      <Card>
        <CardHeader pb={2}>
          <HStack alignItems="center" gap={2}>
            {issue.satisfied ? (
              <CheckCircleIcon color="green" />
            ) : (
              <WarningIcon color="orange" />
            )}
            <LinkOverlay as={Link} to={`/dashboard/${issue.id}`}>
              <Heading size="xs">{issue.subject}</Heading>
            </LinkOverlay>
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
    </LinkBox>
  );
};
