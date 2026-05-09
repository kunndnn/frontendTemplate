import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../../../types/auth.schema";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-screen bg-[#dbedfb] p-5">
      <div className="bg-white flex items-center h-full shadow rounded-xl overflow-hidden">
        <div className="w-1/2 bg-secondary h-full items-center justify-center hidden md:block">
          {t("auth.comingSoon")}
        </div>

        <div className="w-full md:w-1/2 flex-col flex justify-center items-center px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-4"
          >
            <h2 className="font-bold text-2xl">{t("auth.welcomeBack")}</h2>
            <p className="text-gray-500">{t("auth.enterDetails")}</p>
            <Input
              label={t("auth.email")}
              type="email"
              placeholder={t("auth.enterEmail")}
              className="border w-full p-3 rounded"
              {...register("email")}
              errorMessage={errors.email?.message ? t(errors.email.message) : undefined}
            />
            <Input
              label={t("auth.password")}
              type={showPassword ? "text" : "password"}
              placeholder={t("auth.enterPassword")}
              className="border w-full p-3 rounded"
              {...register("password")}
              errorMessage={errors.password?.message ? t(errors.password.message) : undefined}
            />
            <Button type="button" onClick={togglePassword}>{t("auth.toggle")}</Button>
            <Button
              type="submit"
              className="bg-black text-white px-5 py-3 rounded w-full text-lg"
            >
              {isSubmitting ? t("auth.loading") : t("auth.signIn")}
            </Button>
            <p className="text-right">
              <Link to="/admin/forgot-password" className="text-primary">
                {t("auth.forgotPassword")}
              </Link>
            </p>
            <div className="flex justify-between items-center">
              <div className="w-full border-t border-gray-500"></div>
              <div className="px-4 w-full uppercase text-[12px]">
                {t("auth.orContinueWith")}
              </div>
              <div className="w-full border-t border-gray-500"></div>
            </div>
            <p className="text-gray-500">
              {t("auth.dontHaveAccount")}
              <Link to="/signup" className="text-primary">
                {t("auth.signUp")}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
