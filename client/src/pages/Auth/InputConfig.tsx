import { PhoneMaskInput } from "@/components/TextFields/PhoneMaskInput";
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
    id: "phone",
    label: "Телефон",
    inputType: "tel",
    placeholder: "Телефон",
    placementComponent: "login",
    InputComponent: PhoneMaskInput,
    validationRules: {
      pattern: {
        value: /^\+7 \d{3} \d{3} \d{2} \d{2}$/,
        message: "Укажите номера телефона в формате +7 xxx xxx xx xx",
      },
    },
  },
  {
    id: "password",
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
    InputComponent: PhoneMaskInput,
    validationRules: {
      pattern: {
        value: /^\+7 \d{3} \d{3} \d{2} \d{2}$/,
        message: "Укажите номера телефона в формате +7 xxx xxx xx xx",
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
];

export const getInputsByNavigePlacement = (path: string) =>
  inputConfig.filter(
    ({ placementComponent }) =>
      placementComponent === AUTH_PLACEMENT[path.toString() as AUTH_PATH],
  );
