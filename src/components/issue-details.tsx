import { FC } from "react";
import { IssueDto } from "../dto/issue.dto";
import { Heading, HStack } from "@chakra-ui/react";
import { formatDate } from "../utils/formatDate";
import { Tile } from "./tile";
import { IssueStatusIcon } from "./issue-status-icon";

type IssueDetailsProps = {
  issue: IssueDto;
};

export const IssueDetails: FC<IssueDetailsProps> = ({ issue }) => {
  return (
    <>
      <Heading mb={4}>Details</Heading>
      <Tile mb={2} label="Subject">
        {issue.subject}
      </Tile>
      <Tile mb={6} label="Body">
        {issue.body}
      </Tile>
      <Heading size="md" mb={4}>
        Senders' information
      </Heading>
      <HStack mb={6} gap={2} wrap="wrap" width="100%">
        <Tile label="First name">{issue.senderFirstName}</Tile>
        <Tile label="Last name">{issue.senderLastName}</Tile>
        <Tile label="Email">{issue.email}</Tile>
      </HStack>
      <Heading size="md" mb={4}>
        Issue meta
      </Heading>
      <HStack gap={2} wrap="wrap" width="100%">
        <Tile label="Id">{issue.id}</Tile>
        <Tile label="Date Created">{formatDate(issue.dateCreated)}</Tile>
        <Tile label="Last updated">{formatDate(issue.dateUpdated)}</Tile>
        <Tile label="Satisfied">{issue.satisfied.toString()}</Tile>
      </HStack>
    </>
  );
};
