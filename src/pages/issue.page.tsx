import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { IssueDto } from "../dto/issue.dto";
import { Divider, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { IssueDetails } from "../components/issue-details";
import { IssueReplies } from "../components/issue-replies";

export const IssuePage: FC = () => {
  const issue = useLoaderData() as IssueDto;

  return (
    <>
      <Heading size="2xl" mb={2}>
        Issue
      </Heading>
      <Divider mb={4} />
      <SimpleGrid columns={2} gap={8}>
        <GridItem>
          <IssueDetails issue={issue} />
        </GridItem>
        <GridItem>
          <IssueReplies issueId={issue.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};
