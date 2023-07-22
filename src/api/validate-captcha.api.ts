import { httpClient } from "./api-client";

export const validateCaptcha = (captchaResponse: string) =>
  httpClient.post<{ success: boolean }>("captcha/validate", {
    captchaResponse,
  });
