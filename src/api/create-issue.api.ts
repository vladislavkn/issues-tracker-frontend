import { CreateIssueDto } from "../dto/create-issue.dto";
import { httpClient } from "./api-client";

export const createIssue = (createIssueDto: CreateIssueDto) =>
  httpClient.post("issues", createIssueDto);
