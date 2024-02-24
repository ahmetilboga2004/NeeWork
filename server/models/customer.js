import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Customer = sequelize.define("customer", {
    verify: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

export default Customer;
