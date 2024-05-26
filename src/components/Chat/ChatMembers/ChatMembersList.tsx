import { ChatHeader } from "../ChatTopPart/ChatHeader";
import { WrapperMemberList } from "./styled";

interface ChatMembersListProps {
  children: React.ReactNode;
}

export const ChatMembersList = ({ children }: ChatMembersListProps) => {
  return (
    <WrapperMemberList>
      <ChatHeader />
      {children}
    </WrapperMemberList>
  );
};
