import { FieldError } from "react-hook-form";
import styled from "styled-components";

interface InputProps {
  error: FieldError;
}

export const InputWrapper = styled.div<InputProps>`
  position: relative;
  width: 100%;
  margin-bottom: ${({ error }) => (error ? "27px" : "17px")};
`;

export const InputLabel = styled.label<{ isFocused: boolean }>`
  font-size: 9px;
  font-weight: 500;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  color: #999999;
  position: absolute;
  bottom: 28px;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  visibility: ${({ isFocused }) => (!isFocused ? "hidden" : "visible")};
  opacity: ${({ isFocused }) => (!isFocused ? 0 : 1)};
`;

export const StyledInput = styled.input<InputProps>`
  border: none;
  padding: 7px 0;
  border-bottom: 1px solid;
  width: 100%;
  font-weight: 500;
  font-size: 13px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  border-color: ${({ error }) => (error ? "#FF2F2F" : "#3369F3")};
  color: ${({ error }) => (error ? "#FF2F2F" : "#1E1E1E")};
  &::placeholder,
  ::-webkit-input-placeholder {
    color: #999999;
    transition: opacity 0.3s ease;
    opacity: 1;
  }
  :-ms-input-placeholder {
    color: #999999;
    transition: opacity 0.3s ease;
    opacity: 1;
  }
  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

export const InputHintText = styled.span`
  font-size: 8px;
  color: #ff2f2f;
  font-weight: 400;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  position: absolute;
  left: 0;
  bottom: -14px;
  z-index: 2000;
`;
