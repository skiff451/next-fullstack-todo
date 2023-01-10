import {sequelize} from "../sequelize";
import {DataTypes, Model, Optional} from "sequelize";
import {Attribute} from "./types";

interface UserAttributes extends Attribute {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {
}

export interface UserOutput extends Required<UserAttributes> {
}

// class User extends Model<UserAttributes, UserInput> implements UserAttributes {
//     public id!: string
//     public name!: string
//     public email!: string
//     public password!: string
//     // timestamps!
//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;
//     public readonly deletedAt!: Date;
// }
//
// User.init(
//     {
//         id: {
//             type: DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV1,
//             allowNull: false,
//             primaryKey: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//
//     }, {
//         sequelize,
//         timestamps: true,
//         paranoid: true
//     }
// )



export const User = sequelize
    .define<Model<UserAttributes, UserInput>>('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
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

