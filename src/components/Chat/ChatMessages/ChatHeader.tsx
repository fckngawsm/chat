import { DotsThreeVertical, Plus, X } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { MenuConfig } from "../../../types/menu-config";
import { Menu } from "../../Menu/Menu";
import { CircleContainer } from "../../Menu/styled";
import { MemberDivider } from "../ChatMembers/styled";
import {
  ChatHeaderAvatar,
  ChatHeaderName,
  ChatHeaderUserInformation,
  ChatHeaderWrapper,
} from "./styled";

const config: MenuConfig[] = [
  {
    icon: <Plus size={14} weight="bold" color="#3369F3" />,
    text: "Добавить пользователя",
  },
  {
    icon: <X size={14} weight="bold" color="#3369F3" />,
    text: "Удалить пользователя",
  },
];

export const ChatHeader = () => {
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
  }, [dialogIsOpen, handleClickOutside, handleKeyDown]);

  return (
    <>
      <ChatHeaderWrapper>
        <ChatHeaderUserInformation>
          <ChatHeaderAvatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI-_7c6jmIW-XA6pbBuXZyb0TVmrmvBp8rQeh92r_Kw&s"
            alt="avatar"
          />
          <ChatHeaderName>Вадим</ChatHeaderName>
        </ChatHeaderUserInformation>
        <CircleContainer ref={menuRef} onClick={() => setDialogIsOpen(true)}>
          <DotsThreeVertical size={25} weight="bold" color="#3369F3" />
          {dialogIsOpen && <Menu placement="bottom" config={config} />}
        </CircleContainer>
      </ChatHeaderWrapper>
      <MemberDivider />
    </>
  );
};
