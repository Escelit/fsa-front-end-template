import express from "express";
import { routes } from "./routes";
import { connectDB } from "./config/database";

const app = express();
app.use(express.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const bootstrap = async () => {
  await connectDB();
  await app.listen(8080);
  console.log("Server currently running on port 8080");
};

bootstrap();
