import { Center, Tooltip } from "@chakra-ui/react";
import { ReactElement, Ref, forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type FormCaptchaProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

function FormCaptchaInternal<T extends FieldValues>(
  { control, name }: FormCaptchaProps<T>,
  ref?: Ref<ReCAPTCHA>
) {
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
              ref={ref}
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

export const FormCaptcha = forwardRef(FormCaptchaInternal) as <
  T extends FieldValues
>(
  p: FormCaptchaProps<T> & { ref?: Ref<ReCAPTCHA> }
) => ReactElement; // FormCaptcha<T extends FieldValues>
