import { MagnifyingGlass } from "@phosphor-icons/react";
import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled(MagnifyingGlass)<{ isFocused: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.isFocused ? "10px" : "42%")};
  transform: translateY(-50%);
  transform: ${(props) =>
    props.isFocused ? "translateY(-50%)" : "translate(-50%, -50%)"};
  color: #999999;
  transition: left 0.3s ease, transform 0.3s ease;
  pointer-events: none;
`;

export const StyledSearch = styled.input<{ isFocused: boolean }>`
  width: 100%;
  border-radius: 5px;
  padding: 10px 10px 10px ${(props) => (props.isFocused ? "32px" : "32px")};
  background-color: #efefef;
  color: #1e1e1e;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  outline: none;
  border: none;
  height: 32px;
  text-align: center;
  caret-color: transparent;

  &:focus {
    outline: none;
    text-align: left;
    padding-left: 32px;
  }
  &:focus::placeholder {
    opacity: 0;
  }

  &::placeholder,
  ::-webkit-input-placeholder {
    color: #999999;
    font-size: 12px;
    font-weight: 500;
    font-family: "Inter", Arial, Helvetica, sans-serif;
  }
  :-ms-input-placeholder {
    color: #999999;
    font-size: 12px;
    font-weight: 500;
    font-family: "Inter", Arial, Helvetica, sans-serif;
  }
`;
