import { FC, useEffect, useState } from "react";
import { IssueDto } from "../dto/issue.dto";
import { getAllIssues } from "../api/get-all-issues.api";
import { Heading } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { IssuesList } from "../components/issues-list";
import { Pagination } from "../components/pagination";

export const IssuesPage: FC = () => {
  const [issues, setIssues] = useState<IssueDto[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const skip = parseInt(searchParams.get("skip") ?? "0");
  const take = parseInt(searchParams.get("take") ?? "12");

  useEffect(() => {
    const fetchIssues = async () => {
      const issuesResponse = await getAllIssues(skip, take);
      setIssues(issuesResponse.data);
    };

    fetchIssues();
  }, [skip, take]);

  const showNextPage = () =>
    setSearchParams((params) => {
      params.set("skip", (skip + take).toString());
      return params;
    });

  const showPrevPage = () =>
    setSearchParams((params) => {
      params.set("skip", Math.max(skip - take, 0).toString());
      return params;
    });

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
