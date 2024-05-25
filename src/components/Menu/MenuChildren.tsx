import { MenuConfig } from "../../types/menu-config";
import {
  CircleContainer,
  MenuChildrenText,
  MenuChildrenWrapper,
} from "./styled";

export const MenuChildren = ({ icon, text }: MenuConfig) => {
  return (
    <MenuChildrenWrapper>
      <CircleContainer>{icon}</CircleContainer>
      <MenuChildrenText>{text}</MenuChildrenText>
    </MenuChildrenWrapper>
  );
};
