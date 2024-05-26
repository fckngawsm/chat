import { useCallback, useEffect, useRef, useState } from "react";

export const useDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setDialogIsOpen(false);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (dialogIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dialogIsOpen, handleClickOutside, handleKeyDown, handleClose]);

  return {
    menuRef,
    setDialogIsOpen,
    dialogIsOpen,
    handleClose,
  };
};
