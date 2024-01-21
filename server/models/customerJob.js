import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const customerJobs = sequelize.define("job", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortDesc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("active", "progress", "complated", "cancelled"),
    defaultValue: "active",
  },
});

export default customerJobs;
