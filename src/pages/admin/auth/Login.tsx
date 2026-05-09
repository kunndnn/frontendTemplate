import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;
const Login = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="w-full h-screen bg-[#dbedfb]">
      <div className="bg-white flex justify-center items-center h-screen shadow m-5">
        <div className="w-1/2 bg-secondary">sdfdfsf</div>
        <div className="w-1/2">
          <form action="" className="" onSubmit={handleSubmit}>
            <Input
              label="Email Address"
              type="text"
              value=""
              onChange={() => {}}
              placeholder="john@example.com"
              className="border "
            />
            <Input
              label="Password"
              type="password"
              value=""
              onChange={() => {}}
              placeholder="john@example.com"
              className="border "
            />
            <Button type="submit" className="border">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
