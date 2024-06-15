import { Modal } from "@/components/Modal/Modal";
import { DefaultInput } from "@/components/TextFields/DefaultInput";
import { forwardRef } from "react";
import { ModalProps } from "./types";

export const ModalDeleteUser = forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const { errors, onSubmit, register } = props;

    return (
      <Modal
        btnText="Удалить"
        titleText="Удалить пользователя"
        onSubmit={onSubmit}
        ref={ref}
      >
        <DefaultInput
          id="login"
          inputType="text"
          register={register}
          label="Логин"
          placeholder="Логин"
          validationRules={{ required: "Вы забыли указать логин" }}
          error={errors}
        />
      </Modal>
    );
  }
);
