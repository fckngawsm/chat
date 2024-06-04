import { User } from "../../../types/user";

export const getProfileInformation = (user: User) => {
  return [
    {
      field: "Почта",
      value: user.email,
      type: "text",
    },
    {
      field: "Логин",
      value: user.login,
      type: "text",
    },
    {
      field: "Имя",
      value: user.name,
      type: "text",
    },
    {
      field: "Фамилия",
      value: user.lastname,
      type: "text",
    },
    {
      field: "Имя в чате",
      value: user.name,
      type: "text",
    },
    {
      field: "Телефон",
      value: user.phone,
      type: "text",
    },
  ];
};
