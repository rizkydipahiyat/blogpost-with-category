import { Sequelize } from "sequelize";

const db = new Sequelize("blogpost_category", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

export default db;
