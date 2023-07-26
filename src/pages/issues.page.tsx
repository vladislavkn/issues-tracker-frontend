import { FC, useEffect, useState } from "react";
import { IssueDto } from "../dto/issue.dto";
import { getAllIssues } from "../api/get-all-issues.api";
import { Heading } from "@chakra-ui/react";
import { IssuesList } from "../components/issues-list";
import { Pagination } from "../components/pagination";
import { usePaginationParams } from "../hooks/use-pagination-params.hook";

export const IssuesPage: FC = () => {
  const [issues, setIssues] = useState<IssueDto[]>([]);
  const { skip, take, setPaginationParam } = usePaginationParams();

  useEffect(() => {
    const fetchIssues = async () => {
      const issuesResponse = await getAllIssues(skip, take);
      setIssues(issuesResponse.data);
    };

    fetchIssues();
  }, [skip, take]);

  const showNextPage = () => setPaginationParam("skip", skip + take);

  const showPrevPage = () =>
    setPaginationParam("skip", Math.max(skip - take, 0));

  return (
    <>
      <Heading pb={8}>All issues</Heading>
      <IssuesList issues={issues} />
      <Pagination
        hasPrev={skip !== 0}
        hasNext={true}
        onPrev={showPrevPage}
        onNext={showNextPage}
      />
    </>
  );
};
