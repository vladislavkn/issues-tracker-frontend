import { FC } from "react";
import { CreateIssueDto } from "../dto/create-issue.dto";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FormCaptcha } from "./form-captcha";

type IssueCreateFormProps = {
  onSubmit: (dto: CreateIssueDto) => void;
};

type Inputs = CreateIssueDto & { captcha: null | string };

export const CreateIssueForm: FC<IssueCreateFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={8}
      width="100%"
      align="flex-start"
    >
      <VStack spacing={4} width="100%" align="flex-start">
        <Heading size="sm">Personal information</Heading>
        <Input
          isInvalid={Boolean(errors.senderFirstName?.message)}
          placeholder="Your first name"
          {...register("senderFirstName", { required: true })}
        />
        <Input
          isInvalid={Boolean(errors.senderLastName?.message)}
          placeholder="Your last name"
          {...register("senderLastName", { required: true })}
        />
        <Input
          isInvalid={Boolean(errors.email?.message)}
          placeholder="Your email"
          type="email"
          {...register("email", { required: true })}
        />
      </VStack>
      <VStack spacing={4} width="100%" align="flex-start">
        <Heading size="sm">Issue information</Heading>
        <Input
          isInvalid={Boolean(errors.subject?.message)}
          placeholder="Subject"
          {...register("subject", {
            required: true,
            minLength: 5,
            maxLength: 128,
          })}
        />
        <Textarea
          isInvalid={Boolean(errors.body?.message)}
          rows={10}
          placeholder="Your message"
          {...register("body", { required: true })}
        />
      </VStack>
      <FormCaptcha control={control} name="captcha" />
      <Box display="flex" justifyContent="flex-end" width="100%">
        <Button type="submit" variant="solid" colorScheme="teal">
          Submit
        </Button>
      </Box>
    </VStack>
  );
};
