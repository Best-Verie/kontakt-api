const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./config/db");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./../swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(cors());
dbConnect();

const contactRouter = require("./routes");
app.use("/contact", contactRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
