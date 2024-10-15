const express = require("express");
const CONFIG = require("./config/env");

const appRouter = require("./routes/index");
const errorHandler = require("./core/middlewares/error-handler");

const app = express();

app.use(express.json());

app.use("/api", appRouter);

app.use(errorHandler);

app.listen(CONFIG.SERVER_PORT, () => {
  console.log(`Server is running on port ${CONFIG.SERVER_PORT}`);
});
