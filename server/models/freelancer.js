import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Freelancer = sequelize.define("freelancer", {
    verify: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

export default Freelancer;
