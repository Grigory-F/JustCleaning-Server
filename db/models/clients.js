import { Sequelize } from 'sequelize';
import sequelize from '../../utilites/db-config.js';

export default sequelize.define('clients', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    lavel: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "beginner"
    },
}, {
    timestamps: true,
    freezeTableName: true,
});