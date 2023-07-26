import { IssueDto } from "../dto/issue.dto";
import { httpClient } from "./api-client";

export const getOneIssueById = (issueId: number | string) =>
  httpClient.get<IssueDto>(`issues/${issueId}`);
