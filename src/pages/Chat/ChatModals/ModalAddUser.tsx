import { forwardRef } from "react";
import { Modal } from "../../../components/Modal/Modal";
import { DefaultInput } from "../../../components/TextFields/DefaultInput";
import { ModalProps } from "./types";

export const ModalAddUser = forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const { errors, onSubmit, register } = props;

    return (
      <Modal
        btnText="Добавить"
        titleText="Добавить пользователя"
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
