const Task = require('../models/Task');
const User = require('../models/Usuario');

// Crea una nueva tarea
const create = async (taskData) => {
  return await Task.create(taskData);
};

// Actualiza la información de una tarea
const updateTask = async (id, taskData) => {
  return await Task.update(taskData, { where: { id }, returning: true });
};

// Actualiza el estado de una tarea
const updateStatus = async (id, status) => {
  return await Task.update({ status }, { where: { id }, returning: true });
};

// Obtiene todas las tareas para un usuario específico
const findAllByUserId = async (userId) => {
  return await Task.findAll({ where: { userId } });
};

// Obtiene tareas por usuario, estado y ID de tarea
const findByUserIdAndStatus = async (userId, status) => {
  return await Task.findAll({ where: { userId, status } });
};

// Obtiene una tarea específica por ID
const findById = async (id) => {
  return await Task.findByPk(id);
};

// Elimina una tarea si está en estado 'Incomplete'
const deleteIfIncomplete = async (id) => {
  const task = await Task.findByPk(id);
  if (task && task.status === 'Incomplete') {
    return await Task.destroy({ where: { id } });
  }
  return null;
};

module.exports = {
  create,
  updateTask,
  updateStatus,
  findAllByUserId,
  findByUserIdAndStatus,
  findById,
  deleteIfIncomplete,
};
