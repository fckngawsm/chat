import { ChatMemberItem } from "./ChatMembers/ChatMemberItem";
import { ChatMembersList } from "./ChatMembers/ChatMembersList";
import { ChatWrapper } from "./ChatMembers/styled";
import { ChatMessages } from "./ChatMessages/ChatMessages";

export const Chat = () => {
  return (
    <ChatWrapper>
      <ChatMembersList>
        {[1, 2, 3].map(() => (
          <ChatMemberItem />
        ))}
      </ChatMembersList>
      <ChatMessages />
    </ChatWrapper>
  );
};
