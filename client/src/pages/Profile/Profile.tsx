import { Outlet } from "react-router-dom";
import { ProfileNavigation } from "./ProfileNavigation/ProfileNavigation";
import { ProfileWrapper } from "./styled";

export const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileNavigation />
      <Outlet />
    </ProfileWrapper>
  );
};
