import { Sequelize } from "sequelize";

const dataBase = new Sequelize("magic_library", "root", "RooT1234", {
  host: "localhost",
  dialect: "mysql"
})

export default dataBase