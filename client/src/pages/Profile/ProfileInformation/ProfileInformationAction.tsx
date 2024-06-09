import { Divider } from "../../../components/Divider/Divider";
import { useCurrentUser } from "../../../context/userContext";
import { actionConfig } from "../constants/actionConfig";
import {
  ProfileInformationItem,
  ProfileInfromationActionWrapper,
} from "./styled";

export const ProfileInformationAction = () => {
  const { setUser, user } = useCurrentUser();
  const handleClick = () => {
    localStorage.removeItem("jwt");
    setUser(null);
  };

  return (
    <ProfileInfromationActionWrapper>
      {actionConfig.map(({ title, isDangares, link }, index) => (
        <>
          <ProfileInformationItem
            onClick={link ? handleClick : null}
            to={link}
            isDangares={isDangares}
          >
            {title}
          </ProfileInformationItem>
          {index < actionConfig.length - 1 && <Divider fullWidth />}
        </>
      ))}
    </ProfileInfromationActionWrapper>
  );
};
