import styled from "styled-components";

export const StyledChatMessages = styled.div`
  width: 80%;
  overflow: hidden;
  padding: 10px 20px;
`;

export const ChatNotSelectedText = styled.h2`
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  color: #999999;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const StyledChatMainPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 97vh;
`;

export const ChatHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const ChatHeaderUserInformation = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ChatHeaderAvatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

export const ChatHeaderName = styled.h2`
  font-weight: 600;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 1;
  color: #1e1e1e;
  margin: 0;
`;

// dialog

export const ChatDialogGeneralWrapper = styled.div`
  max-height: 710px;
  overflow: auto;
`;

export const ChatDialogDate = styled.h2`
  font-weight: 500;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 12px;
  margin: 0;
  text-align: center;
  margin: 30px 0;
  color: #999999;
`;

export const ChatDialogMessageWrapper = styled.div<{ isMyMessage?: boolean }>`
  max-width: 400px;
  min-width: 110px;
  width: fit-content;
  background-color: ${({ isMyMessage = false }) =>
    isMyMessage ? "#E4EDFD" : "#f8f8f8"};
  padding: 11px;
  border-radius: ${({ isMyMessage = false }) =>
    isMyMessage ? "12px 12px 0 12px" : "0px 12px 12px 12px"};
  display: flex;
  box-sizing: border-box;
  position: relative;
  align-self: ${({ isMyMessage = false }) =>
    isMyMessage ? "flex-start" : "flex-end"};
  margin: ${({ isMyMessage = false }) =>
    isMyMessage ? "10px 0 10px auto" : "10px auto 10px 0"};
  margin-top: 30px;
  flex-direction: row;
  gap: 10px;
`;

export const ChatDialogMessageItem = styled.h3`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 1.3;
  color: #1e1e1e;
  font-weight: 500;
  margin: 0;
  white-space: pre-wrap;
`;

export const ChatDialogMessageStatus = styled.div`
  margin-right: 0;
  align-items: end;
  display: flex;
`;

export const ChatDialogMessageDate = styled.h4<{ isMyMessage?: boolean }>`
  font-weight: 500;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 9px;
  color: ${({ isMyMessage = false }) => (isMyMessage ? "#3369F3" : "#999999")};
  margin: 0;
  position: absolute;
  bottom: 11px;
  right: 11px;
`;

export const ChatDialogMessageContent = styled.div`
  flex-grow: 1;
`;

export const StyledUploadText = styled.h2`
  font-size: 12px;
  line-height: 1.2;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  color: #3369f3;
  width: 122px;
  font-weight: 500;
  word-wrap: break-word;
  text-decoration: underline;
  text-decoration-color: #3369f3;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
`;
