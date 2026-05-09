import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../../../types/auth.schema";

const Login = () => {
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

  return (
    <div className="w-full h-screen bg-[#dbedfb] p-5">
      <div className="bg-white flex items-center h-full shadow rounded-xl overflow-hidden">
        <div className="w-1/2 bg-secondary h-full items-center justify-center hidden md:block">
          coming soon.
        </div>

        <div className="w-full md:w-1/2 flex-col flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-4"
          >
            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              className="border w-full p-3 rounded"
              {...register("email")}
              errorMessage={errors.email?.message}
              errorClassName={
                errors.email?.message ? "text-red-500 text-sm mt-1" : ""
              }
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              className="border w-full p-3 rounded"
              {...register("password")}
              errorMessage={errors.password?.message}
              errorClassName={
                errors.password?.message ? "text-red-500 text-sm mt-1" : ""
              }
            />
            <Button
              type="submit"
              className="bg-black text-white px-5 py-3 rounded w-full"
            >
              {isSubmitting ? "Loading..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
