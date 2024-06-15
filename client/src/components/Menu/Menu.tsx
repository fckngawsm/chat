import { memo } from "react";
import { MenuConfig } from "../../types/menu-config";
import { MenuChildren } from "./MenuChildren";
import { MenuWrapper } from "./styled";
import { MenuPlacement } from "./type";

interface MenuProps {
  config: MenuConfig[];
  placement: MenuPlacement;
}

export const Menu = memo(({ config, placement }: MenuProps) => {
  return (
    <MenuWrapper placement={placement}>
      {config.map((item, index) => (
        <div key={index}>
          <MenuChildren {...item} />
        </div>
      ))}
    </MenuWrapper>
  );
});
