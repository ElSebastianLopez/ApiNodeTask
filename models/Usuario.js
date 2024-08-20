const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Usuario = sequelize.define('Usuario', {
  firstName: { // First name of the user
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: { // Last name of the user
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: { // Email address of the user
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: { // Password of the user (should be hashed)
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: { // Phone number of the user
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Usuario;
