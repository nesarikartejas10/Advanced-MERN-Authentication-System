import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/auth/SignupPage";
import EmailVerificationInfoPage from "../pages/auth/EmailVerificationInfoPage";
import EmailVerifiedPage from "../pages/auth/EmailVerifiedPage";
import LoginPage from "../pages/auth/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
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
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
]);

export default router;
