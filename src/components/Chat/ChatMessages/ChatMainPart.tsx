import { ChatBottomPart } from "../ChatBottomPart/ChatBottomPart";
import { ChatDialogMessage } from "./ChatDialogMessage";
import { ChatHeader } from "./ChatHeader";
import { ChatDialogMessageContent, StyledChatMainPart } from "./styled";

export const ChatMainPart = () => {
  return (
    <StyledChatMainPart>
      <ChatHeader />
      <ChatDialogMessageContent>
        <ChatDialogMessage />
      </ChatDialogMessageContent>
      <ChatBottomPart />
    </StyledChatMainPart>
  );
};
