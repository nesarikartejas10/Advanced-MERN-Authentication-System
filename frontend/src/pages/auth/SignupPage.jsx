import React from "react";
import SignupForm from "../../components/auth/SignupForm";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="sm:w-md w-full px-10 py-20">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
