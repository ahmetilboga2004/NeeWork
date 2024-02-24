import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const subCategory = sequelize.define("subcategory", {
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
});

export default subCategory;
