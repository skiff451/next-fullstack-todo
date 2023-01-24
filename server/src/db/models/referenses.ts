import {Todo} from "./Todo";
import {User} from "./User";

User.hasMany(Todo)
Todo.belongsTo(User)


