import app from "./src/app.js";

const PORT = 3000;
async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
}

startServer();
