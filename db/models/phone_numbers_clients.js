import { Sequelize } from 'sequelize';
import sequelize from '../../utilites/db-config.js';

export default sequelize.define('phone_numbers_clients', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    freezeTableName: true,
});