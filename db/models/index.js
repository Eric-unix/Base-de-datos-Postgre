const  {User, UserSchema} = require('./user.model');
const  {User, UserSchema} = require('./user.model');
const  {User, UserSchema} = require('./user.model');
const  {User, UserSchema} = require('./user.model');
const  {User, UserSchema} = require('./user.model');

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;