import {
  Avatar,
  Button,
  Dropdown,
  DropdownHeader,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import { SiFsecure } from "react-icons/si";
import { Link, useNavigate } from "react-router";
import { getData } from "../context/UserContext";
import api from "../api/axios";

const NavigationBar = () => {
  const { user, setUser } = getData();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await api.post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
        },
      );
      if (response?.data?.success) {
        setUser(null);
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {}
  };
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <SiFsecure className="mr-2 text-2xl dark:text-white" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          SecureAuth
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {user ? (
          <>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <DropdownHeader className="flex flex-col justify-center gap-4">
                <div>
                  <span className="block text-sm">{user.username}</span>
                  <span className="block text-sm font-medium truncate">
                    {user.email}
                  </span>
                </div>

                <Link
                  onClick={logoutHandler}
                  className="px-4 py-2 ml-auto text-center text-white transition-colors duration-300 rounded-md bg-cyan-600 hover:bg-cyan-700 w-28"
                >
                  Logout
                </Link>
              </DropdownHeader>
            </Dropdown>
            <NavbarToggle />
          </>
        ) : (
          <Button onClick={() => navigate("/login")} color="cyan">
            Login
          </Button>
        )}
      </div>
    </Navbar>
  );
};

export default NavigationBar;
