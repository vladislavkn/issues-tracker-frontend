import { Box, Button, Heading } from "@chakra-ui/react";
import { DefaultLayout } from "../layouts/default.layout";
import { Link } from "react-router-dom";
import { CreateIssueForm } from "../components/create-issue-form";
import { CreateIssueDto } from "../dto/create-issue.dto";
import { validateCaptcha } from "../api/validate-captcha.api";
import { createIssue } from "../api/create-issue.api";
import { useToast } from "@chakra-ui/react";

export function MainPage() {
  const toast = useToast();

  const handleSubmitIssue = async (
    createIssueDto: CreateIssueDto,
    captchaResponse: string
  ) => {
    try {
      const captchaValidationResponse = await validateCaptcha(captchaResponse);
      const captchaPassed = captchaValidationResponse.data.success;
      if (!captchaPassed) throw new Error("Captcha validation failed");

      const issueCreatedResponse = await createIssue(createIssueDto);
      const issueCreated = issueCreatedResponse.status === 201;
      if (!issueCreated) throw new Error("Issue creation failed");

      toast({
        title: "Issue created",
      });
      return true;
    } catch (e) {
      toast({
        title: "Some error occured",
        status: "error",
        duration: 9000,
      });
      return false;
    }
  };

  return (
    <DefaultLayout
      heading="Submit an issue"
      navigation={
        <Box display="flex" justifyContent="flex-end">
          <Link to="/dashboard">
            <Button variant="ghost">Open dashboard</Button>
          </Link>
        </Box>
      }
    >
      <CreateIssueForm onSubmit={handleSubmitIssue} />
    </DefaultLayout>
  );
}
