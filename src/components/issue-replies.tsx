import { Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

type IssueRepliesProps = {
  issueId: number;
};

export const IssueReplies: FC<IssueRepliesProps> = () => {
  return (
    <>
      <Heading mb={4}>Replies</Heading>
      <Text>No replies found.</Text>
    </>
  );
};
