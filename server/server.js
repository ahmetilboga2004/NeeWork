// ** 3. Parti Modüller
import express from "express";
import session from "express-session";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import RedisStore from "connect-redis";

dotenv.config();

import redisClient from "./config/redis.js";

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
import freelancerRouter from "./router/freelancerRouter.js";
import customerRouter from "./router/customerRouter.js";
import serviceRouter from "./router/serviceRouter.js";
import jobRouter from "./router/JobRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import subCategoryRouter from "./router/subCategoryRouter.js";
import authRouter from "./router/authRouter.js";

const redisStore = new RedisStore({
    prefix: "session:",
    client: redisClient,
});

app.use(
    session({
        store: redisStore,
        resave: false,
        saveUninitialized: false,
        secret: process.env.SECRET_KEY,
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 24, // 1 Gün
        },
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use("/freelancer", freelancerRouter);
app.use("/customer", customerRouter);
app.use("/service", serviceRouter);
app.use("/jobs", jobRouter);
app.use("/category", categoryRouter);
app.use("/subcategory", subCategoryRouter);
app.use("/auth", authRouter);

export default app;
