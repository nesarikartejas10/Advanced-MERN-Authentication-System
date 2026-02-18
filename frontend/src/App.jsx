import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";

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
    path: "/login",
    element: <LoginPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
