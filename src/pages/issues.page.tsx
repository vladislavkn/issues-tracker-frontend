import { FC, useEffect, useState } from "react";
import { IssueDto } from "../dto/issue.dto";
import { getAllIssues } from "../api/get-all-issues.api";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";

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
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {issues.map((issue) => (
          <Card key={issue.id}>
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
        ))}
      </SimpleGrid>
      <HStack justifyContent="flex-end">
        <HStack gap={4} align="center">
          <Button onClick={showPrevPage}>Prev page</Button>
          <Button onClick={showNextPage}>Next page</Button>
        </HStack>
      </HStack>
    </>
  );
};
