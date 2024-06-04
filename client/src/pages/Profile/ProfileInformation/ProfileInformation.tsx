import { useModal } from "../../../hooks/useModal";
import { ModalAddAvatar } from "../../Chat/ChatMessages/Modal/ModalAddAvatar";
import {
  StyledProfileInformation,
  StyledProfileInformationAvatar,
} from "../styled";
import { ProfileInformationAction } from "./ProfileInformationAction";
import { ProfileInformationStroke } from "./ProfileInformationStroke";
import { StyledProfileInformationName } from "./styled";

export const ProfileInformation = () => {
  const { isOpen, modalRef, openModal } = useModal();
  return (
    <>
      <StyledProfileInformation>
        <StyledProfileInformationAvatar
          onClick={openModal}
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611728.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user"
        />
        <StyledProfileInformationName>Иван</StyledProfileInformationName>
        <ProfileInformationStroke onlyRead />
        <ProfileInformationAction />
      </StyledProfileInformation>
      {isOpen && <ModalAddAvatar ref={modalRef} />}
    </>
  );
};