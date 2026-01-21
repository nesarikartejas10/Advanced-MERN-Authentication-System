import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is listening http://localhost:${PORT}`);
  });
};

startServer();
