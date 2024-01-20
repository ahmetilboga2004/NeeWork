import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

export default Category;
