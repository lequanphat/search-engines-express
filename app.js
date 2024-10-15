const express = require("express");
const CONFIG = require("./config/env");

const appRouter = require("./routes/index");

const app = express();

app.use(express.json());

app.use("/api", appRouter);

app.listen(CONFIG.SERVER_PORT, () => {
  console.log(`Server is running on port ${CONFIG.SERVER_PORT}`);
});
