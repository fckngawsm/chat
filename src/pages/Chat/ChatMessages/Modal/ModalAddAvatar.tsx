import { forwardRef, useRef, useState } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { StyledUploadText } from "../styled";

export const ModalAddAvatar = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
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
