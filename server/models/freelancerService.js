import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const freelancerServices = sequelize.define("service", {
    title: {
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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    popularity: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    status: {
        type: DataTypes.ENUM("active", "progress", "complated", "cancelled"),
        defaultValue: "active",
    },
});

export default freelancerServices;
