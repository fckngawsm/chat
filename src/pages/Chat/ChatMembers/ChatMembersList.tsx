import { ChatMembersHeader } from "../ChatMembersTop/ChatMembersHeader";
import { WrapperMemberList } from "./styled";

interface ChatMembersListProps {
  children: React.ReactNode;
}

export const ChatMembersList = ({ children }: ChatMembersListProps) => {
  return (
    <WrapperMemberList>
      <ChatMembersHeader />
      {children}
    </WrapperMemberList>
  );
};
