import { LoginDto } from "../dto/login.dto";
import { httpClient } from "./api-client";

export const login = (loginDto: LoginDto) =>
  httpClient.post("auth/login", {
    username: loginDto.email,
    password: loginDto.password,
  });
