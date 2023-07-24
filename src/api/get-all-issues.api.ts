import { IssueDto } from "../dto/issue.dto";
import { httpClient } from "./api-client";

export const getAllIssues = (skip: number = 0, take: number = 10) =>
  httpClient.get<IssueDto[]>(`issues?skip=${skip}&take=${take}`);
