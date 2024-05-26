import styled from "styled-components";

// chat

export const ChatWrapper = styled.section`
  width: 100%;
  display: flex;
`;

// header

export const WrapperMemberHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 21px 10px 14px;
  box-sizing: border-box;
`;

export const WrapperMemberHeaderProfile = styled.h2`
  font-size: 12px;
  line-height: 1.2;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  align-self: self-end;
  margin: 0;
  color: #999999;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`;

// list

export const WrapperMemberList = styled.div`
  min-height: 100vh;
  width: 20%;
  max-width: 310px;
  background-color: #fbfbfb;
  border-right: 1px solid #eaeaea;
`;

// member

export const WrapperMember = styled.div<{ isSelected: boolean }>`
  width: 100%;
  display: flex;
  padding: 12px 10px;
  background-color: ${({ isSelected }) =>
    isSelected ? "#E4EDFD" : "transparent"};
  box-sizing: border-box;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const MemberAvatar = styled.img`
  border-radius: 50%;
  width: 47px;
  height: 47px;
`;

export const WrapperMemberInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-self: baseline;
  gap: 4px;
`;

export const WrapperTextMessage = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

export const MemberName = styled.h2`
  font-size: 13px;
  line-height: 1;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #1e1e1e;
  margin: 0;
`;

export const MembeLastMessage = styled.h2`
  font-size: 13px;
  line-height: 1;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: #999999;
  max-width: 193px;
  margin: 0;
  height: 28px;
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;
`;

export const StyledGeneralInformation = styled.div`
  display: flex;
`;

export const StyledMessageInformation = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

export const StyledMessageDate = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 9px;
  line-height: 1.2;
  color: #999999;
  font-family: "Inter", Arial, Helvetica, sans-serif;
`;

export const StyledCountUnreadMessage = styled.h4`
  margin: 0;
  background-color: #3369f3;
  font-weight: 500;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 11px;
  text-align: center;
  color: #ffffff;
`;
