const { User, Cart, SessionToken } = require('../../db/model/user_model');
const cookieParser = require('cookie-parser');

class profileController {
    static async getProfileById(id, cookie) {
        let user;
        try {
            user = await User.findByPk(id, {
                attributes: ['id', 'username', 'email', 'address', 'balance'],
            });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
        }
        catch (error) {
            return error;
        }
        finally {
            console.log('Profile controller executed');
        }
        return user.dataValues;
    }

    static async getUserCartById(id) {
        let cart;
        try {
            cart = await Cart.findAll({
                where: {
                    userId: id,
                },
                attributes: ['cartId', 'userId', 'productId', 'quantity', 'totalprice'],
            });
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }
        }
        catch (error) {
            return error;
        }
        finally {
            console.log('Cart controller executed');
        }
        return cart;
    }  
}

module.exports = profileController;