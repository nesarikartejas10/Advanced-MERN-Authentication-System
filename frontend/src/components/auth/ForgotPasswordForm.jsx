import { FaKey } from "react-icons/fa";
import { Button, TextInput, Label } from "flowbite-react";
import { Link } from "react-router";

const ForgotPasswordForm = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <FaKey className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Forgot Password</h1>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div className="text-gray-700">
          Enter the email associated with your account to change your password.
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="email">Email</Label>
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
          />
        </div>

        <Button type="submit" className="font-bold cursor-pointer" color="cyan">
          Submit
        </Button>
      </form>

      <div className="pt-5 text-center">
        <span>Remember your password?</span>
        <Link to="/login" className="ml-2 text-cyan-800 hover:underline">
          Login
        </Link>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
