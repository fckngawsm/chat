import { useCallback, useEffect, useRef, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    },
    [closeModal],
  );

  // TODO: пофиксить
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current) {
        const isClickInside = modalRef.current.contains(event.target as Node);
        if (!isClickInside) {
          closeModal();
        }
      }
    },
    [closeModal],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleEsc, handleClickOutside]);

  return { isOpen, openModal, closeModal, modalRef };
};
