import React, { forwardRef } from "react";
import {
  ModalButton,
  ModalChildren,
  ModalContent,
  ModalHintText,
  ModalTitle,
  ModalWrapper,
} from "./styled";

interface ModalProps {
  children: React.ReactNode;
  isError?: boolean;
  titleErrorText?: string;
  titleText: string;
  btnText: string;
  hintIsVisible?: boolean;
  hintText?: string;
  onSubmit: (fn: any) => void;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    children,
    btnText,
    hintIsVisible,
    hintText,
    isError,
    titleErrorText,
    titleText,
    onSubmit,
  } = props;

  return (
    <ModalWrapper ref={ref}>
      <ModalContent>
        <ModalTitle>{isError ? titleErrorText : titleText}</ModalTitle>
        <form onSubmit={onSubmit}>
          <ModalChildren>{children}</ModalChildren>
          <ModalButton>{btnText}</ModalButton>
        </form>
        {hintIsVisible && <ModalHintText>{hintText}</ModalHintText>}
      </ModalContent>
    </ModalWrapper>
  );
});
