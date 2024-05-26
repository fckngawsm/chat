import styled from "styled-components";
import { MenuPlacement } from "./type";

export const MenuWrapper = styled.div<{ placement: MenuPlacement }>`
  width: 210px;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0px 0px 6px 0px #00000024;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  height: fit-content;
  bottom: ${({ placement }) => (placement === "top" ? "55px" : "0")};
  top: ${({ placement }) => (placement === "bottom" ? "55px" : "none")};
  // TODO: вернуться и разобраться
  right: ${({ placement }) => (placement !== "bottom" ? "none" : "20px")};
  z-index: 1000;
  background-color: #ffffff;
`;

export const MenuChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const MenuChildrenIconWrapper = styled.div`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const MenuChildrenText = styled.h2`
  font-size: 12px;
  line-height: 1.2;
  font-weight: 500;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  color: #1e1e1e;
  margin: 0;
`;

export const CircleContainer = styled.div`
  border-radius: 50%;
  border: 1.5px solid #3369f3;
  display: flex;
  width: 22px;
  height: 22px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;
