export class CreateIssueDto {
  senderFirstName: string;
  senderLastName: string;
  subject: string;
  body: string;
  email: string;

  constructor(values: CreateIssueDto) {
    this.senderFirstName = values.senderFirstName;
    this.senderLastName = values.senderLastName;
    this.subject = values.subject;
    this.body = values.body;
    this.email = values.email;
  }
}
