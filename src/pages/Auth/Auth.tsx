import { FieldError, useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_TEXT, REGISTER_TEXT } from "../../constants/auth";
import { getInputsByNavigePlacement } from "./InputConfig";
import {
  AuthButton,
  AuthContent,
  AuthEmptySpace,
  AuthForm,
  AuthTitle,
  AuthWrapper,
  AuthWrapperButtons,
  PageWrapper,
} from "./styled";

export const Auth = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === `/${LOGIN_TEXT.link}`;
  const AUTH_TEXT = isLogin ? LOGIN_TEXT : REGISTER_TEXT;

  const REDIRECT_LINK = isLogin
    ? `/${REGISTER_TEXT.link}`
    : `/${LOGIN_TEXT.link}`;

  const config = getInputsByNavigePlacement(pathname);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  return (
    <PageWrapper>
      <AuthWrapper>
        <AuthContent>
          <AuthTitle>{AUTH_TEXT.title}</AuthTitle>
          <AuthForm onSubmit={handleSubmit(onSubmit)}>
            {config.map(
              (
                {
                  InputComponent,
                  label,
                  placeholder,
                  inputType,
                  id,
                  validationRules,
                },
                index
              ) => {
                return (
                  <InputComponent
                    inputType={inputType}
                    label={label}
                    placeholder={placeholder}
                    key={index}
                    id={id}
                    validationRules={validationRules!}
                    register={register}
                    error={errors[id] as FieldError}
                  />
                );
              }
            )}
            <AuthEmptySpace />
            <AuthWrapperButtons>
              <AuthButton type="submit" isOutlined>
                {AUTH_TEXT.authorization}
              </AuthButton>
              <Link onClick={reset} to={REDIRECT_LINK}>
                <AuthButton isOutlined={false}>{AUTH_TEXT.redirect}</AuthButton>
              </Link>
            </AuthWrapperButtons>
          </AuthForm>
        </AuthContent>
      </AuthWrapper>
    </PageWrapper>
  );
};
