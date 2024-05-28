import { Divider } from "../../../components/Divider/Divider";
import { actionConfig } from "../constants/actionConfig";
import {
  ProfileInformationItem,
  ProfileInfromationActionWrapper,
} from "./styled";

export const ProfileInformationAction = () => {
  return (
    <ProfileInfromationActionWrapper>
      {actionConfig.map(({ title, isDangares, link }, index) => (
        <>
          <ProfileInformationItem to={link} isDangares={isDangares}>
            {title}
          </ProfileInformationItem>
          {index < actionConfig.length - 1 && <Divider fullWidth />}
        </>
      ))}
    </ProfileInfromationActionWrapper>
  );
};
