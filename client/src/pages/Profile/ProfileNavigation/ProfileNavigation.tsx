import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { StyledProfileNavigation, StyledProfileNavigationIcon } from "./styled";

export const ProfileNavigation = () => {
  const navigate = useNavigate();
  return (
    <StyledProfileNavigation>
      <StyledProfileNavigationIcon onClick={() => navigate(-1)}>
        <ArrowLeft size={13} color="#FFFFFF" weight="bold" cursor="pointer" />
      </StyledProfileNavigationIcon>
    </StyledProfileNavigation>
  );
};
