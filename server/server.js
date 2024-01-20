// ** 3. Parti Modüller
import express from "express";
import bodyParser from "body-parser";
const app = express();
import nunjucks from "nunjucks";
import dotenv from "dotenv";
dotenv.config();

// ** Core Modüller
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// * Veritabanı Modüllerim
import sequelize from "./config/database.js";
import "./models/relationship.js";
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Veritabanı senkronize edildi.");
  })
  .catch((err) => {
    console.error("Veritabanı senkronize hatası:", err);
  });

// ** Router Modüllerim
import commonRouter from "./router/commonRouter.js";
import freelancerRouter from "./router/freelancerRouter.js";
import customerRouter from "./router/customerRouter.js";
import serviceRouter from "./router/serviceRouter.js";
import jobRouter from "./router/JobRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import subCategoryRouter from "./router/subCategoryRouter.js";

app.set("view engine", "html");
nunjucks.configure(path.join(__dirname, "../client/views"), {
  autoescape: true,
  express: app,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../node_modules")));
app.use(express.static(path.join(__dirname, "../client/public")));

app.use("/", commonRouter);
app.use("/freelancer", freelancerRouter);
app.use("/customer", customerRouter);
app.use("/service", serviceRouter);
app.use("/jobs", jobRouter);
app.use("/category", categoryRouter);
app.use("/subcategory", subCategoryRouter);

export default app;
