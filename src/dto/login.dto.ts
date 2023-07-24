export class LoginDto {
  email: string;
  password: string;

  constructor(values: LoginDto) {
    (this.email = values.email), (this.password = values.password);
  }
}
