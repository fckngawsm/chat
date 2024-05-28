import { RegisterOptions } from "react-hook-form";
import {
  CustomInputProps,
  DefaultInput,
} from "../../components/TextFields/DefaultInput";
import { AUTH_PLACEMENT } from "./constants";
import { AUTH_PATH } from "./type";

type Placement = "login" | "register";

export interface InputConfig {
  label: string;
  placeholder: string;
  inputType: string;
  placementComponent: Placement;
  InputComponent: React.ComponentType<CustomInputProps>;
  id: string;
  validationRules?: RegisterOptions;
}

const inputConfig: InputConfig[] = [
  // login
  {
    id: "login",
    label: "Логин",
    inputType: "text",
    placeholder: "Логин",
    placementComponent: "login",
    InputComponent: DefaultInput,
    validationRules: {
      required: "Укажите логин",
    },
  },
  {
    id: "password-l",
    label: "Пароль",
    inputType: "password",
    placeholder: "Пароль",
    placementComponent: "login",
    InputComponent: DefaultInput,
    validationRules: {
      required: "Вы забыли про пароль",
    },
  },
  // register
  {
    id: "email",
    label: "Почта",
    inputType: "email",
    placeholder: "Почта",
    placementComponent: "register",
    InputComponent: DefaultInput,
    validationRules: {
      required: "Поле обязательно",
    },
  },
  {
    id: "login",
    label: "Логин",
    inputType: "test",
    placeholder: "Логин",
    placementComponent: "register",
    InputComponent: DefaultInput,
    validationRules: {
      required: "Укажите логин",
      minLength: {
        value: 5,
        message: "Логин должен содержать как минимум 5 символов",
      },
      maxLength: {
        value: 20,
        message: "Логин должен содержать максимум 20 символов",
      },
    },
  },
  {
    id: "name",
    label: "Имя",
    inputType: "text",
    placeholder: "Имя",
    placementComponent: "register",
    InputComponent: DefaultInput,
    validationRules: {
      required: "Укажите Имя",
      minLength: {
        value: 2,
        message: "Имя должго содержать как минимум 2 символов",
      },
    },
  },
  {
    id: "lastname",
    label: "Фамилия",
    inputType: "test",
    placeholder: "Фамилия",
    placementComponent: "register",
    InputComponent: DefaultInput,
    validationRules: {
      required: "Укажите Фамилию",
    },
  },
  {
    id: "phone",
    label: "Телефон",
    inputType: "tel",
    placeholder: "Телефон",
    placementComponent: "register",
    InputComponent: DefaultInput,
    validationRules: {
      required: "Укажите Телефон",
      maxLength: {
        value: 11,
        message: "Имя должго содержать максимум 11 символов",
      },
      minLength: {
        value: 11,
        message: "Имя должго содержать минимум 11 символов",
      },
    },
  },
  {
    id: "password",
    label: "Пароль",
    inputType: "password",
    placeholder: "Пароль",
    placementComponent: "register",
    InputComponent: DefaultInput,
    validationRules: {
      required: "Вы забыли про пароль",
    },
  },
  {
    id: "password-repeat",
    label: "Пароль (еще раз)",
    inputType: "password",
    placeholder: "Пароль (еще раз)",
    placementComponent: "register",
    InputComponent: DefaultInput,
    validationRules: {
      required: "Повторите пароль",
    },
  },
];

export const getInputsByNavigePlacement = (path: string) =>
  inputConfig.filter(
    ({ placementComponent }) =>
      placementComponent === AUTH_PLACEMENT[path.toString() as AUTH_PATH]
  );
