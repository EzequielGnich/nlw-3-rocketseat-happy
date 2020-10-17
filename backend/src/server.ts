import express from "express";
import "express-async-errors";
import path from "path";
import cors from "cors";

import "./database/connection";
import routes from "./routes";
import errorHandler from "./errors/handler";

const app = express();

const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(port, () => console.log(`Runing on port ${port}`));
