import {sequelize} from "../sequelize";
import {DataTypes, Optional} from "sequelize";
import {Attribute} from "./types";

interface TodoAttributes extends Attribute {
    id: number;
    title: string;
    description: string;
    deadline: Date;
    status: "in process" | "completed" | "expired";

}

export interface TodoInput extends Optional<TodoAttributes, 'id'> {
}

export interface TodoOutput extends Required<TodoAttributes> {
}

//<Model<TodoAttributes, TodoInput>>
export const Todo = sequelize
    .define('Todo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        UserId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        }

    }, {
        // Other model options go here

    });


