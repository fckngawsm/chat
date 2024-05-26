import { DotsThreeVertical, Plus, X } from "@phosphor-icons/react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDialog } from "../../../hooks/useDialog";
import { useModal } from "../../../hooks/useModal";
import { MenuConfig } from "../../../types/menu-config";
import { Divider } from "../../Divider/Divider";
import { Menu } from "../../Menu/Menu";
import { CircleContainer } from "../../Menu/styled";
import { ModalAddUser } from "../ChatModals/ModalAddUser";
import { ModalDeleteUser } from "../ChatModals/ModalDeleteUser";
import {
  ChatHeaderAvatar,
  ChatHeaderName,
  ChatHeaderUserInformation,
  ChatHeaderWrapper,
} from "./styled";

export const ChatHeader = () => {
  const { dialogIsOpen, menuRef, setDialogIsOpen } = useDialog();

  const {
    isOpen: modalAddUserIsOpen,
    openModal: openAddUserModal,
    closeModal: closeAddUserModal,
    modalRef: modalAddUserRef,
  } = useModal();

  const {
    isOpen: modalDeleteUserIsOpen,
    openModal: openDeleteUserModal,
    closeModal: closeDeleteUserModal,
    modalRef: modalDeleteUserRef,
  } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const config: MenuConfig[] = useMemo(
    () => [
      {
        icon: <Plus size={14} weight="bold" color="#3369F3" />,
        text: "Добавить пользователя",
        onClick: () => {
          openAddUserModal();
          setDialogIsOpen(false);
        },
      },
      {
        icon: <X size={14} weight="bold" color="#3369F3" />,
        text: "Удалить пользователя",
        onClick: () => {
          openDeleteUserModal();
          setDialogIsOpen(false);
        },
      },
    ],
    [openAddUserModal, openDeleteUserModal, setDialogIsOpen]
  );

  const onSubmit = (data: any) => {
    console.log(data);
    closeAddUserModal();
  };

  const onSubmitDeleteUser = (data: any) => {
    console.log(data);
    closeDeleteUserModal();
  };

  return (
    <>
      <ChatHeaderWrapper>
        <ChatHeaderUserInformation>
          <ChatHeaderAvatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI-_7c6jmIW-XA6pbBuXZyb0TVmrmvBp8rQeh92r_Kw&s"
            alt="avatar"
          />
          <ChatHeaderName>Вадим</ChatHeaderName>
        </ChatHeaderUserInformation>
        <CircleContainer ref={menuRef} onClick={() => setDialogIsOpen(true)}>
          <DotsThreeVertical
            size={25}
            weight="bold"
            color={dialogIsOpen ? "#3369F3" : "#1E1E1E"}
          />
          {dialogIsOpen && <Menu placement="bottom" config={config} />}
        </CircleContainer>
      </ChatHeaderWrapper>
      <Divider fullWidth={true} />
      {modalAddUserIsOpen && (
        <ModalAddUser
          ref={modalAddUserRef}
          errors={errors["login"]}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
        />
      )}
      {modalDeleteUserIsOpen && (
        <ModalDeleteUser
          ref={modalDeleteUserRef}
          errors={errors["login"]}
          onSubmit={handleSubmit(onSubmitDeleteUser)}
          register={register}
        />
      )}
    </>
  );
};
