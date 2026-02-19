import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-10 py-20 sm:w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
