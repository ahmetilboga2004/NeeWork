import { Sequelize } from "sequelize";

var sequelize = new Sequelize(
  process.env.DATABASE || "neework_dev",
  process.env.DB_USERNAME || "postgres",
  process.env.DB_PASSWORD || "123456",
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "postgres",
  }
);

export default sequelize;
