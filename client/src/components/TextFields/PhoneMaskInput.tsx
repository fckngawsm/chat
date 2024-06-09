import { useState } from "react";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";
import {
  InputHintText,
  InputLabel,
  InputWrapper,
  StyledInputMask,
} from "./styled";

export interface CustomInputProps {
  label: string;
  placeholder: string;
  inputType: string;
  id: string;
  error: FieldError;
  register: UseFormRegister<any>;
  validationRules: RegisterOptions;
}

export const PhoneMaskInput = ({
  inputType,
  label,
  placeholder,
  error,
  id,
  register,
  validationRules,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputWrapper error={error}>
      <InputLabel isFocused={isFocused} htmlFor={id}>
        {label}
      </InputLabel>
      <StyledInputMask
        id={id}
        mask="+7 999 999 99 99"
        {...register(id, validationRules)}
        error={error}
        placeholder={placeholder}
        type={inputType}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
      {error?.message && <InputHintText>{error?.message}</InputHintText>}
    </InputWrapper>
  );
};
