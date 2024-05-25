import styled from "styled-components";

export const StyledChatMessages = styled.div`
  width: 80%;
  overflow: hidden;
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
`;

export const ChatHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 21px;
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
