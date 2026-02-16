import app from "./src/app.js";
import { config } from "./src/config/envconfig.js";

const PORT = config.port || 5000;
async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
}

startServer();
