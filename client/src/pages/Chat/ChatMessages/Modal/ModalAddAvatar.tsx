import { Modal } from "@/components/Modal/Modal";
import { forwardRef, useRef } from "react";
import { StyledUploadText } from "../styled";

export const ModalAddAvatar = forwardRef<HTMLDivElement>((_, ref) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const handleOpenInputFile = () => {
    fileRef.current?.click();
  };
  const handleSubmitAvatar = () => {};
  return (
    <Modal
      btnText="Поменять"
      titleText="Загрузите файл"
      onSubmit={handleSubmitAvatar}
      hintText="Нужно выбрать файл"
      titleErrorText="Ошибка, попробуйте ещё раз"
      ref={ref}
    >
      <StyledUploadText onClick={handleOpenInputFile}>
        Выбрать файл на компьютере
      </StyledUploadText>
      <input ref={fileRef} type="file" style={{ display: "none" }} />
    </Modal>
  );
});
