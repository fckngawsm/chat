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
  titleText: string;
  onSubmit: (fn: any) => void;
  titleErrorText?: string;
  btnText: string;
  isError?: boolean;
  hintIsVisible?: boolean;
  hintText?: string;
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
    <ModalWrapper ref={ref} data-testid="modal">
      <ModalContent>
        <ModalTitle>{isError ? titleErrorText : titleText}</ModalTitle>
        <form onSubmit={onSubmit} aria-label="form">
          <ModalChildren>{children}</ModalChildren>
          <ModalButton type="submit">{btnText}</ModalButton>
        </form>
        {hintIsVisible && <ModalHintText>{hintText}</ModalHintText>}
      </ModalContent>
    </ModalWrapper>
  );
});
