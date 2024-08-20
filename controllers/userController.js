/** @format */

const userService = require('../services/userService');

const getUsers = async (req, res) => {
	try {
		const users = await userService.getAllUsers();
		let response = {
			succes: true,
			data: users,
			message: 'Ok',
		};
		res.json(response);
	} catch (err) {
		let response = {
			succes: false,
			data: null,
			message: 'Internal Server Error',
		};
		// For any other errors, return a 500 status code
		res.status(500).json(response);
	}
};
const getUserById = async (req, res) => {
    try {
      const { id } = req.params; // Captura el ID del parámetro de la ruta
      const user = await userService.getUserById(id);
  
      if (!user) {
        return res.status(404).json({
          success: false,
          data: null,
          message: 'User not found',
        });
      }
  
      res.status(200).json({
        success: true,
        data: user,
        message: 'Ok',
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: null,
        message: 'Internal Server Error',
      });
    }
  };

const createUser = async (req, res) => {
	try {
		const user = await userService.createUser(req.body);
		let response = {
			succes: true,
			data: user,
			message: 'Usuario creado',
		};
		res.status(200).json(response);
	} catch (err) {
		if (err.name === 'SequelizeValidationError') {
			let response = {
				succes: false,
				data: null,
				message: err.message,
			};
			// If it's a validation error, return a 400 status code
			res.status(400).json(response);
		} else {
			let response = {
				succes: false,
				data: null,
				message: 'Internal Server Error',
			};
			// For any other errors, return a 500 status code
			res.status(500).json(response);
		}
	}
};
const updateUser = async (req, res) => {
    try {
      const { id } = req.params; // Captura el ID del parámetro de la ruta
      const userData = req.body;
  
      const updatedUser = await userService.updateUser(id, userData);
  
      res.status(200).json({
        success: true,
        data: updatedUser,
        message: 'User updated successfully',
      });
    } catch (err) {
		if (err.name === 'SequelizeValidationError') {
			let response = {
				succes: false,
				data: null,
				message: err.message,
			};
			// If it's a validation error, return a 400 status code
			res.status(400).json(response);
		} else {
			let response = {
				succes: false,
				data: null,
				message: 'Internal Server Error',
			};
			// For any other errors, return a 500 status code
			res.status(500).json(response);
		}
	}
  };

module.exports = {
	getUsers,
    getUserById,
	createUser,
    updateUser,
};
