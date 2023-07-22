import { Box, Button, Heading } from "@chakra-ui/react";
import { DefaultLayout } from "../layouts/default.layout";
import { Link } from "react-router-dom";
import { CreateIssueForm } from "../components/create-issue-form";

export function MainPage() {
  return (
    <DefaultLayout
      navigation={
        <Box display="flex" justifyContent="flex-end">
          <Link to="/dashboard">
            <Button variant="ghost">Open dashboard</Button>
          </Link>
        </Box>
      }
    >
      <Heading paddingBottom={8}>Submit an issue</Heading>
      <CreateIssueForm onSubmit={console.log} />
    </DefaultLayout>
  );
}
