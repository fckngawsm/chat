import { FieldError, UseFormRegister } from "react-hook-form";

export type ModalProps = {
  onSubmit: (fn: any) => void;
  register: UseFormRegister<any>;
  errors: FieldError;
};
