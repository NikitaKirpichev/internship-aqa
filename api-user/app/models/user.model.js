module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },

        first_name:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        },

        last_name:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        },

        email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        password:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        },

        birthday:{
            type: Sequelize.DATE,
            allowNull: true,
            unique: false,
        }
    });

    return User;
};