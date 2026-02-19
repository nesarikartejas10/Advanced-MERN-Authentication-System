import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import EmailVerificationInfoPage from "./pages/auth/EmailVerificationInfoPage";
import EmailVerifiedPage from "./pages/auth/EmailVerifiedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/email-sent",
    element: <EmailVerificationInfoPage />,
  },
  {
    path: "/verify/:token",
    element: <EmailVerifiedPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
