import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Category from "./CategoryModel.js";

const { DataTypes } = Sequelize;

const Post = db.define(
	"posts",
	{
		uuid: {
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
	}
);

Post.belongsTo(Category, { foreignKey: "categoryId" });

export default Post;

(async () => {
	await db.sync();
})();
