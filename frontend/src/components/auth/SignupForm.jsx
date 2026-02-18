import { Button, Label, TextInput } from "flowbite-react";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { RiLoader2Line } from "react-icons/ri";
import { useState } from "react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <SiGnuprivacyguard className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Create Your Account</h1>
      </div>

      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="fullname">Full Name</Label>
          </div>
          <TextInput
            id="fullname"
            type="text"
            name="username"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Email</Label>
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password">Password</Label>
          </div>
          <div className="relative">
            <TextInput
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              required
            />
            {showPassword ? (
              <IoEye
                size={23}
                className="absolute right-0 top-0 h-full cursor-pointer mr-4"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            ) : (
              <IoEyeOff
                size={23}
                className="absolute right-0 top-0 h-full cursor-pointer mr-4"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            )}
          </div>
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
            "Create Account"
          )}
        </Button>
      </form>

      <div className="text-center pt-5">
        <span>You already have an account?</span>
        <Link to="/login" className="ml-2 text-cyan-800 hover:underline">
          Login
        </Link>
      </div>
    </>
  );
};

export default SignupForm;
