import NavigationBar from "../components/NavigationBar";
import { getData } from "../context/UserContext";

const HomePage = () => {
  const { user } = getData();
  return (
    <>
      <div className="container pt-10 mx-auto">
        <NavigationBar />
      </div>

      <div className="flex items-center justify-center h-125">
        <div>
          <h1 className="text-5xl font-bold">
            Welcome, {user ? user.username : "#Guest"}
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
