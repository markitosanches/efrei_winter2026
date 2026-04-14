module.exports = (connex, Sequelize) => {
 const User = connex.define("user", {
    fullname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING
    },
    token: {
        type: Sequelize.STRING
    }
 })
 return User;
}