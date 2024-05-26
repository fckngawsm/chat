import { CaretRight } from "@phosphor-icons/react";
import { Search } from "../../Search/Search";
import { WrapperMemberHeader, WrapperMemberHeaderProfile } from "./styled";

export const ChatHeader = () => {
  return (
    <WrapperMemberHeader>
      <WrapperMemberHeaderProfile>
        Профиль
        <CaretRight color="#999999" weight="bold" size={12} cursor="pointer" />
      </WrapperMemberHeaderProfile>
      <Search placeholder="Поиск" raduiusSize="s" />
    </WrapperMemberHeader>
  );
};
