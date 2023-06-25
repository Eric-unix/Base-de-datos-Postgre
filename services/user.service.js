const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize')

const getConnection = require('../libs/postgres');
const { use } = require('../routes/users.router');
class UserService {
    constructor(){}

    async create(data){
      const newUser = await models.User.findAll();
        return newUser;
    }

    async find(){
        const client = await models.User.findAll();
        return rta;
    }

    async findOne(id){
      const user = await models.User.findByPk(id);
      if(!user){
        throw boom.notFound('user not fund');
      }
        return user;
    }

    async update(id, changes) {
      const user = await models.User.findByPk(id);
      const rta = await user.updtae(changes);
        return RTCRtpSender;
      }
    
      async delete(id) {
        const user = await models.User.findByPk(id);
        await user.destroy();
        return { id };
      }

}
module.exports = UserService;