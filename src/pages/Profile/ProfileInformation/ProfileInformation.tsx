import {
  StyledProfileInformation,
  StyledProfileInformationAvatar,
} from "../styled";
import { ProfileInformaitonStroke } from "./ProfileInformaitonStroke";
import { ProfileInformationAction } from "./ProfileInformationAction";
import { StyledProfileInformationName } from "./styled";

export const ProfileInformation = () => {
  return (
    <StyledProfileInformation>
      <StyledProfileInformationAvatar src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611728.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user" />
      <StyledProfileInformationName>Иван</StyledProfileInformationName>
      <ProfileInformaitonStroke onlyRead />
      <ProfileInformationAction />
    </StyledProfileInformation>
  );
};
