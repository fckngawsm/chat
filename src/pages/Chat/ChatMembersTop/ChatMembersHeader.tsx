import { CaretRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { Search } from "../../../components/Search/Search";
import { WrapperMemberHeader, WrapperMemberHeaderProfile } from "./styled";

export const ChatMembersHeader = () => {
  const navigate = useNavigate();
  return (
    <WrapperMemberHeader>
      <WrapperMemberHeaderProfile onClick={() => navigate("/profile")}>
        Профиль
        <CaretRight color="#999999" weight="bold" size={12} cursor="pointer" />
      </WrapperMemberHeaderProfile>
      <Search placeholder="Поиск" raduiusSize="s" />
    </WrapperMemberHeader>
  );
};
