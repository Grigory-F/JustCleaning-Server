import { Sequelize } from 'sequelize';
import sequelize from '../../utilites/db-config.js';

export default sequelize.define('articles', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    freezeTableName: true,
});
