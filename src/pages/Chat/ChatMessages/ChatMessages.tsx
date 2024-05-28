import { ChatMainPart } from "./ChatMainPart";
import { ChatNotSelected } from "./ChatNotSelected";
import { StyledChatMessages } from "./styled";

export const ChatMessages = () => {
  const selected = true;
  return (
    <StyledChatMessages>
      {!selected ? <ChatNotSelected /> : <ChatMainPart />}
    </StyledChatMessages>
  );
};
