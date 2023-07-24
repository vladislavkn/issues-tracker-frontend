import { CreateIssueDto } from "./create-issue.dto";

export class IssueDto extends CreateIssueDto {
  dateCreated: string;
  dateUpdated: string;
  satisfied: boolean;
  id: number;

  constructor(values: IssueDto) {
    super(values);
    this.id = values.id;
    this.dateCreated = values.dateCreated;
    this.dateUpdated = values.dateUpdated;
    this.satisfied = values.satisfied;
  }
}
