import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../../../types/auth.schema";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
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
          coming soon.
        </div>

        <div className="w-full md:w-1/2 flex-col flex justify-center items-center px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-4"
          >
            <h2 className="font-bold text-2xl">Welcome Back!</h2>
            <p className="text-gray-500">Please enter your details to login</p>
            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              className="border w-full p-3 rounded"
              {...register("email")}
              errorMessage={errors.email?.message}
            />
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="border w-full p-3 rounded"
              {...register("password")}
              errorMessage={errors.password?.message}
            />
            <Button onClick={togglePassword}>Toggle</Button>
            <Button
              type="submit"
              className="bg-black text-white px-5 py-3 rounded w-full text-lg"
            >
              {isSubmitting ? "Loading..." : "Sign In ->"}
            </Button>
            <p className="text-right">
              <Link to="/admin/forgot-password" className="text-primary">
                Forgot password ?
              </Link>
            </p>
            <div className="flex justify-between items-center">
              <div className="w-full border-t border-gray-500"></div>
              <div className="px-4 w-full uppercase text-[12px]">
                or continue with
              </div>
              <div className="w-full border-t border-gray-500"></div>
            </div>
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
