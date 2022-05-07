/* import  sequelize from '../utilites/db-config.js';
import Articles from './models/articles.js';
import Users from './models/users.js';
import Roles from './models/roles.js';


const Article = Articles(sequelize)
const User = Users(sequelize)
const Role = Roles(sequelize)

Role.belongsToMany(User, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
User.belongsToMany(Role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});


export default {
  Roles: Role,
  Sequelize: sequelize,
  Articles: Article,
  Users: User,
} */