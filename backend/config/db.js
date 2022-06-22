import { Sequelize } from "sequelize";
import 'dotenv/config'

const db = new Sequelize('salaowb', 'root', 'cadmax123', {
    dialect: 'mysql',
    host: 'localhost'
  });

export default db