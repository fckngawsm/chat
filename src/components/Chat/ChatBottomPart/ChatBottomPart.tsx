import { ArrowRight, File, Gps, Image } from "@phosphor-icons/react";
import { useDialog } from "../../../hooks/useDialog";
import { MenuConfig } from "../../../types/menu-config";
import { Menu } from "../../Menu/Menu";
import { Search } from "../../Search/Search";
import { MemberDivider } from "../ChatMembers/styled";
import {
  ChatBottomPartAttachButton,
  ChatBottomPartSubmitButton,
  ChatBottomPartWrapper,
} from "./styled";

const config: MenuConfig[] = [
  {
    icon: <Image size={14} color="#3369F3" weight="duotone" />,
    text: "Фото или видео",
  },
  {
    icon: <File size={14} color="#3369F3" weight="duotone" />,
    text: "Файл",
  },
  {
    icon: <Gps size={14} color="#3369F3" weight="duotone" />,
    text: "Локация",
  },
];

export const ChatBottomPart = () => {
  const { dialogIsOpen, menuRef, setDialogIsOpen } = useDialog();
  return (
    <>
      <MemberDivider />
      <ChatBottomPartWrapper>
        <div ref={menuRef}>
          <ChatBottomPartAttachButton
            cursor="pointer"
            color={dialogIsOpen ? "#3369F3" : "#999999"}
            size={32}
            onClick={() => setDialogIsOpen(true)}
          />
        </div>
        {dialogIsOpen && <Menu placement="top" config={config} />}
        <Search placeholder="Сообщение" raduiusSize="l" viewIcon={false} />
        <ChatBottomPartSubmitButton>
          <ArrowRight color="#FFFFFF" size={15} />
        </ChatBottomPartSubmitButton>
      </ChatBottomPartWrapper>
    </>
  );
};
