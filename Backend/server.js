import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/db/connectDB.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();