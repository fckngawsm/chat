import { MenuConfig } from "../../types/menu-config";
import { MenuChildren } from "./MenuChildren";
import { MenuWrapper } from "./styled";
import { MenuPlacement } from "./type";

interface MenuProps {
  config: MenuConfig[];
  placement: MenuPlacement;
}

export const Menu = ({ config, placement }: MenuProps) => {
  return (
    <MenuWrapper placement={placement}>
      {config.map(({ icon, text }) => (
        <MenuChildren icon={icon} text={text} />
      ))}
    </MenuWrapper>
  );
};
