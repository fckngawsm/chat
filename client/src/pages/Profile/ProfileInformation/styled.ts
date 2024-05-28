import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledProfileInformationName = styled.h1`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  margin: 0 auto 60px;
`;

export const StyledProfileInfromationStrokeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 76px;
`;

export const StyledProfileInfromationStrokeItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledProfileInfromationItemTitle = styled.h2`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  color: #1e1e1e;
  margin: 0;
`;

export const StyledProfileInfromationItemInput = styled.input`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  color: #999999;
  margin: 0;
  border: none;
  outline: none;
  text-align: right;
  flex-grow: 1;
  max-width: 200px;

  &:disabled {
    background-color: transparent;
  }
`;

export const ProfileInfromationActionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const ProfileInformationItem = styled(Link)<{ isDangares: boolean }>`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 13px;
  color: ${({ isDangares }) => (isDangares ? "#FF0000" : "#3369F3")};
  text-decoration: none;
  margin: 0;
  margin: 10px 0;
`;
