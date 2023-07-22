import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { DefaultLayout } from "../layouts/default.layout";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

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
      <VStack spacing={4} width="100%" align="flex-start">
        <Input placeholder="Your first name" />
        <Input placeholder="Your last name" />
        <Input placeholder="Your email" />
        <Textarea rows={10} placeholder="Your message" />
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_SITE_KEY}
          onChange={console.log}
        />
        <Box display="flex" justifyContent="flex-end" width="100%">
          <Button variant="solid" colorScheme="teal">
            Submit
          </Button>
        </Box>
      </VStack>
    </DefaultLayout>
  );
}
