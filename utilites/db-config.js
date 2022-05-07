import { Sequelize } from 'sequelize';

export default new Sequelize('just_cleaning', 'postgres', process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: 'localhost'
  });