import { ChatBottomPart } from "../ChatBottomPart/ChatBottomPart";
import { ChatDialogMessage } from "./ChatDialogMessage";
import { ChatHeader } from "./ChatHeader";
import { StyledChatMainPart } from "./styled";

export const ChatMainPart = () => {
  return (
    <StyledChatMainPart>
      <ChatHeader />
      <div style={{ flexGrow: 1 }}>
        <ChatDialogMessage />
      </div>
      <ChatBottomPart />
    </StyledChatMainPart>
  );
};
