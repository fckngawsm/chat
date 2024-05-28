import { Paperclip } from "@phosphor-icons/react";
import styled from "styled-components";

export const ChatBottomPartWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 11px;
  position: relative;
`;

export const ChatBottomPartSubmitButton = styled.button`
  border-radius: 50%;
  background-color: #3369f3;
  width: 28px;
  height: 28px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ChatBottomPartAttachButton = styled(Paperclip)`
  rotate: -45°;
`;
