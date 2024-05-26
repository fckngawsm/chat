import { DotsThreeVertical, Plus, X } from "@phosphor-icons/react";
import { useDialog } from "../../../hooks/useDialog";
import { MenuConfig } from "../../../types/menu-config";
import { Divider } from "../../Divider/Divider";
import { Menu } from "../../Menu/Menu";
import { CircleContainer } from "../../Menu/styled";
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
  const { dialogIsOpen, menuRef, setDialogIsOpen } = useDialog();

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
          <DotsThreeVertical
            size={25}
            weight="bold"
            color={dialogIsOpen ? "#3369F3" : "#1E1E1E"}
          />
          {dialogIsOpen && <Menu placement="bottom" config={config} />}
        </CircleContainer>
      </ChatHeaderWrapper>
      <Divider fullWidth={true} />
    </>
  );
};
