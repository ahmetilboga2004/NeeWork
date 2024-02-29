import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Freelancer = sequelize.define("freelancer", {
    verify: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    meslek: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    popularity: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

export default Freelancer;
