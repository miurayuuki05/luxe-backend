const hashWasm = require('hash-wasm');
const sequelize = require('../serve');
const crypto = require('crypto');
const { User, SessionToken } = require('../../db/model/user_auth_model');

class userAuthController{
    static loginUser(username, password){
        let user;
        try{
            user = User.findOne({
                where: {
                    username: username,
                }
            });
            if(!user){
                return res.status(404).json({message: 'User not found'});
            }
            const salt = user.salt; 
        }
        catch(error){
            return error;
        }
        finally{
            console.log('User Auth controller executed');
        }
        return user;

    }
}