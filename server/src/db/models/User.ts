import {sequelize} from "../sequelize";
import {DataTypes, Model, Optional} from "sequelize";
import {Attribute} from "./types";
const uniqid = require('uniqid');

export interface UserAttributes extends Attribute {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {
}

export interface UserOutput extends Required<UserAttributes> {
}

export const User = sequelize
    .define<Model<UserAttributes, UserInput>>('User', {
        id: {
            type: DataTypes.STRING,
            defaultValue: uniqid() ,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    }, {
        // Other model options go here
    });


