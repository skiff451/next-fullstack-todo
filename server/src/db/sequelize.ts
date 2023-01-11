import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize(
    `${process.env.POSTGRES_DB_NAME}`,
    `${process.env.POSTGRES_DB_USER}`,
    `${process.env.POSTGRES_DB_PASSWORD}`, {
        port: +`${process.env.POSTGRES_DB_PORT}`,
        host: `${process.env.POSTGRES_DB_HOST}`,
        dialect: 'postgres'
    });

