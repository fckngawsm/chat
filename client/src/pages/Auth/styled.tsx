import styled from "styled-components";

interface ButtonProps {
  isOutlined: boolean;
}

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const AuthWrapper = styled.div`
  max-width: 340px;
  width: 340px;
  margin: 0 auto;
  box-shadow: 0px 0px 6px 0px #00000024;
  font-weight: 500;
  border-radius: 12px;
  min-height: 450px;
  max-height: 690px;
  display: flex;
  flex-direction: column;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 340px;
  flex-grow: 1;
`;

export const AuthContent = styled.div`
  padding: 50px 30px 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const AuthTitle = styled.h2`
  font-size: 20px;
  line-height: 1;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 400;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
`;

export const AuthWrapperButtons = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 65px;
`;

export const AuthButton = styled.button<ButtonProps>`
  cursor: pointer;
  width: 100%;
  padding: 12px 70px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 400;
  border-radius: 8px;
  border: none;
  font-size: ${({ isOutlined }) => (isOutlined ? "13px" : "11px")};
  background-color: ${({ isOutlined }) => (isOutlined ? "#3369F3" : "#FFFFFF")};
  color: ${({ isOutlined }) => (isOutlined ? "#FFFFFF" : "#3369F3")};
`;

export const AuthEmptySpace = styled.div`
  flex-grow: 1;
`;
