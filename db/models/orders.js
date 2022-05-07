import { Sequelize } from 'sequelize';
import sequelize from '../../utilites/db-config.js';

export default sequelize.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    work: {
        type: Sequelize.STRING,
        allowNull: true,
    },
}, {
    timestamps: true,
    freezeTableName: true,
});