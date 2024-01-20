import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const customerJobs = sequelize.define("job", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortDesc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("active", "progress", "complated", "cancelled"),
    defaultValue: "active",
  },
});

export default customerJobs;
