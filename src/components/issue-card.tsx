import { FC } from "react";
import { IssueDto } from "../dto/issue.dto";
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
import { IssueStatusIcon } from "./issue-status-icon";

type IssueCardProps = {
  issue: IssueDto;
};

export const IssueCard: FC<IssueCardProps> = ({ issue }) => {
  return (
    <LinkBox>
      <Card>
        <CardHeader pb={2}>
          <HStack alignItems="center" gap={2}>
            <IssueStatusIcon satisfied={issue.satisfied} />
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
