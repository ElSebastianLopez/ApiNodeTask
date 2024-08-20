const User = require('../models/Usuario');

const findAll = async () => {
  return await User.findAll();
};
const findOne = async (condition) => {
    return await User.findOne(condition);
  };

const create = async (userData) => {
  return await User.create(userData);
};
const update = async (id, updateData) => {
    return await User.update(updateData, {
      where: { id },
      returning: true, // Para devolver el registro actualizado
    });
  };

module.exports = {
  findAll,
  create,
  findOne,
  update
};
