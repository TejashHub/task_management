import express from "express";
import cors from "cors";
import tasks from "./routes/tasks.router.js";
import notFound from "./middleware/not-found.middleware.js";
import errorHandler from "./middleware/error-handler.middleware.js";
const app = express();

// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandler);

export default app;
