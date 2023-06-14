require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const v1Router = require("./src/routes");
const morgan = require("morgan");
const swaggerDocs = require("./src/swagger/swagger-config");
const swaggerUi = require("swagger-ui-express");
const port = process.env.PORT || 8080;

// const corsOptions = {
//     origin: [
//         "https://weatherappnext-ericyui66-outlookcom.vercel.app",
//         "https://weatherappnext-git-main-ericyui66-outlookcom.vercel.app",
//         "http://localhost:3000",
//     ],
// };
app.use(cors());
app.use("/v1", v1Router);
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === "production" ? "common" : "dev"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/health-check", (req, res) =>
    res.status(200).send({ message: "healthy" })
);

app.listen(port, () => {
    console.log(`service listening on port ${port}`);
});
