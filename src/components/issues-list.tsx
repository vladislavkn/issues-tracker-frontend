import { FC } from "react";
import { IssueDto } from "../dto/issue.dto";
import { SimpleGrid } from "@chakra-ui/react";
import { IssueCard } from "./issue-card";

type IssuesListProps = {
  issues: IssueDto[];
};

export const IssuesList: FC<IssuesListProps> = ({ issues }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </SimpleGrid>
  );
};
