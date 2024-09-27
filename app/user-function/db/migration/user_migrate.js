const sequelize = require('../serve');
const { User, Cart, SessionToken } = require('../model/user_model');

User.hasMany(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(SessionToken, { foreignKey: 'userId' });
SessionToken.belongsTo(User, { foreignKey: 'userId' });

const syncDB = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synchronized successfully');
    }
    catch (error) {
        console.error('Error synchronizing database:', error);
    }
};

syncDB();




