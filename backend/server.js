import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import { config } from "./src/config/envConfig.js";

const PORT = config.port || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is listening http://localhost:${PORT}`);
  });
};

startServer();
