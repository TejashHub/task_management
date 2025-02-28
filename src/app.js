import express from "express";
import cors from "cors";
import tasks from "./routes/tasks.router.js";

const app = express();

// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/tasks", tasks);

export default app;
