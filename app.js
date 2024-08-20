/** @format */

const express = require('express');
const sequelize = require('./models/index');
const userController = require('./controllers/userController');
const loginController = require('./controllers/LoginController');
const taskController = require('./controllers/taskController');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/login', loginController.login);

app.get('/users', userController.getUsers);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.get('/users/:id', userController.getUserById);

app.post('/tasks', taskController.createTask); 
app.put('/tasks/:id', taskController.updateTask); 
app.patch('/tasks/:id/status', taskController.updateStatus); 
app.get('/tasks/user/:userId', taskController.getAllTasksByUserId); 
app.get('/tasks/user/:userId/status/:status', taskController.getTasksByUserIdAndStatus); 
app.get('/tasks/:id', taskController.getTaskById); 
app.delete('/tasks/:id', taskController.deleteTaskIfIncomplete); 


sequelize
	.sync()
	.then(() => {
		app.listen(3000, () => {
			console.log('Servidor escuchando en el puerto 3000');
		});
	})
	.catch((err) => {
		console.error('No se pudo conectar a la base de datos:', err);
	});
