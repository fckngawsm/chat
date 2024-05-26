import { FieldError } from "react-hook-form";

export type ModalProps = {
  onSubmit: (fn: any) => void;
  register: any;
  errors: FieldError;
};
