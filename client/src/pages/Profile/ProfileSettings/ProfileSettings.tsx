import { useCurrentUser } from "@/context/userContext";
import { ProfileInformationStroke } from "../ProfileInformation/ProfileInformationStroke";
import { getProfileInformation } from "../constants/informationConfig";
import {
  StyledProfileInformation,
  StyledProfileInformationAvatar,
  StyledProfileInformationButton,
} from "../styled";

export const ProfileSettings = () => {
  const { user } = useCurrentUser();
  const config = getProfileInformation(user);
  return (
    <>
      <StyledProfileInformation>
        <StyledProfileInformationAvatar src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611728.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user" />
        <ProfileInformationStroke config={config} />
        <StyledProfileInformationButton>
          Сохранить
        </StyledProfileInformationButton>
      </StyledProfileInformation>
    </>
  );
};
