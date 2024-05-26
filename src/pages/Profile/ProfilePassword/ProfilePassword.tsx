import { ProfileInformaitonStroke } from "../ProfileInformation/ProfileInformaitonStroke";
import { passwordConfig } from "../constants/passwordConfig";
import {
  StyledProfileInformation,
  StyledProfileInformationAvatar,
  StyledProfileInformationButton,
} from "../styled";

export const ProfilePassword = () => {
  return (
    <StyledProfileInformation>
      <StyledProfileInformationAvatar src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611728.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user" />
      <ProfileInformaitonStroke config={passwordConfig} />
      <StyledProfileInformationButton style={{ marginTop: "162px" }}>
        Сохранить
      </StyledProfileInformationButton>
    </StyledProfileInformation>
  );
};
