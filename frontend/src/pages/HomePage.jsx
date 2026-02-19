import NavigationBar from "../components/NavigationBar";

const HomePage = () => {
  const isAuthenticated = true;
  return (
    <>
      <div className="container pt-10 mx-auto">
        <NavigationBar />
      </div>

      <div className="flex items-center justify-center h-125">
        <div>
          <h1 className="text-5xl font-bold">
            Welcome, {isAuthenticated ? "Tejas Nesarikar" : "#Guest"}
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
