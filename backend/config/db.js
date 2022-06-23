import { Sequelize } from "sequelize";
import 'dotenv/config'

const db = new Sequelize('salaowb', 'root', 'fatec2021', {
    dialect: 'mysql',
    host: 'localhost'
  });

export default db