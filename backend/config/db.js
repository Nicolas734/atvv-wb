import { Sequelize } from "sequelize";
import 'dotenv/config'

const DB = process.env.BD
const USER = 'root' 
const senha = process.env.BD_SENHA
const HOST = 'localhost'
const PORT = 3307

const db = new Sequelize('salaowb', 'root', 'fatec2021', {
    dialect: 'mysql',
    host: 'localhost'
  });

export default db

