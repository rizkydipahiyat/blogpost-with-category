import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Category = db.define(
	"category",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
	}
);

export default Category;

(async () => {
	await db.sync();
})();
