const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./Usuario'); // Asegúrate de importar el modelo `User`

const Task = sequelize.define('Task', {
  name: { // Name of the task
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: { // Description of the task
    type: DataTypes.TEXT, // TEXT for longer descriptions
    allowNull: true,
  },
  status: { // Status of the task (e.g., pending, completed)
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Incomplete', // Default status is 'pending'
  },
});

// Define the association between User and Task
User.hasMany(Task, {
  foreignKey: 'userId', // Foreign key in the Task table to reference the User
  as: 'tasks', // Alias for the association
});
Task.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

module.exports = Task;
