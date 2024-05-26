import styled from "styled-components";

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledProfileInformation = styled.div`
  width: 510px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
`;

export const StyledProfileInformationAvatar = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 21px;
`;

export const StyledProfileInformationButton = styled.button`
  cursor: pointer;
  width: 280px;
  padding: 12px 70px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 400;
  border-radius: 8px;
  border: none;
  font-size: 13px;
  background-color: #3369f3;
  color: #ffffff;
  margin: 60px auto 0;
`;
