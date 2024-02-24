import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Session = sequelize.define("session", {
    session_key: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    device_info: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    ip: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
});

export default Session;
