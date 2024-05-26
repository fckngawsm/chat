import { MenuConfig } from "../../types/menu-config";
import {
  CircleContainer,
  MenuChildrenText,
  MenuChildrenWrapper,
} from "./styled";

export const MenuChildren = ({ icon, text, onClick }: MenuConfig) => {
  return (
    <MenuChildrenWrapper onClick={onClick}>
      <CircleContainer>{icon}</CircleContainer>
      <MenuChildrenText>{text}</MenuChildrenText>
    </MenuChildrenWrapper>
  );
};
