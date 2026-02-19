import { useState } from "react";
import { FaTableCellsRowUnlock } from "react-icons/fa6";
import { Button, Label, TextInput } from "flowbite-react";
import api from "../../api/axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { RiLoader2Line } from "react-icons/ri";
import { getData } from "../../context/UserContext";

const LoginForm = () => {
  const { setUser } = getData();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      setIsLoading(true);
      const response = await api.post("/auth/login", formData);
      if (response?.data?.success) {
        navigate("/");
        setUser(response?.data?.user);
        toast.success(response?.data?.message);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <FaTableCellsRowUnlock className="text-5xl" />
        <h1 className="mb-10 text-2xl font-bold">Login</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col max-w-md gap-4">
        <div>
          <div className="block mb-2">
            <Label htmlFor="email">Email</Label>
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="block mb-2">
            <Label htmlFor="password">Password</Label>
          </div>
          <div className="relative">
            <TextInput
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleInputChange}
            />
            {showPassword ? (
              <IoEye
                size={23}
                className="absolute top-0 right-0 h-full mr-4 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            ) : (
              <IoEyeOff
                size={23}
                className="absolute top-0 right-0 h-full mr-4 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            )}
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Link
            to="/forgot-password"
            className=" text-cyan-800 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className="font-bold cursor-pointer"
          color="cyan"
          disabled={isLoading}
        >
          {isLoading ? (
            <RiLoader2Line
              size={23}
              className="animate-spin [animation-duration:1.2s]"
            />
          ) : (
            "Login"
          )}
        </Button>
      </form>

      <div className="pt-5 text-center">
        <span>You don't have an account?</span>
        <Link to="/signup" className="ml-2 text-cyan-800 hover:underline">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
