import {
  MembeLastMessage,
  MemberAvatar,
  MemberDivider,
  MemberName,
  StyledCountUnreadMessage,
  StyledGeneralInformation,
  StyledMessageDate,
  StyledMessageInformation,
  WrapperMember,
  WrapperMemberInformation,
  WrapperTextMessage,
} from "./styled";

export const ChatMemberItem = () => {
  return (
    <>
      <MemberDivider />
      <WrapperMember isSelected={true}>
        <MemberAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI-_7c6jmIW-XA6pbBuXZyb0TVmrmvBp8rQeh92r_Kw&s" />
        <WrapperMemberInformation>
          <StyledGeneralInformation>
            <WrapperTextMessage>
              <MemberName>Алеша</MemberName>
              <MembeLastMessage>
                Привет тут такое дело нужно как можно быстрей выйти погулять
                dasdsadsa
              </MembeLastMessage>
            </WrapperTextMessage>

            <StyledMessageInformation>
              <StyledMessageDate>10:49</StyledMessageDate>
              <StyledCountUnreadMessage>2</StyledCountUnreadMessage>
            </StyledMessageInformation>
          </StyledGeneralInformation>
        </WrapperMemberInformation>
      </WrapperMember>
    </>
  );
};