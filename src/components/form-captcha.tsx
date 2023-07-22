import { Center, Tooltip } from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type FormCaptchaProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

export function FormCaptcha<T extends FieldValues>({
  control,
  name,
}: FormCaptchaProps<T>) {
  return (
    <Controller
      rules={{ required: true }}
      name={name}
      control={control}
      render={(
        { field: { onChange, onBlur }, fieldState: { error } } //error
      ) => (
        <Tooltip
          label="Pass the captcha"
          closeOnClick
          placement="right"
          isOpen={Boolean(error)}
        >
          <Center
            p={1}
            borderWidth={2}
            borderColor={Boolean(error) ? "red.300" : "white"}
            borderRadius="md"
          >
            <ReCAPTCHA
              onBlur={onBlur}
              sitekey={import.meta.env.VITE_SITE_KEY}
              onChange={(token) => onChange({ target: { value: token } })}
            />
          </Center>
        </Tooltip>
      )}
    />
  );
}
