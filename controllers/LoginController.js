/** @format */

const userService = require('../services/userService');

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				success: false,
				data: null,
				message: 'Email and password are required',
			});
		}

		const user = await userService.findByEmailAndPassword(email, password);
		let response = {
			succes: true,
			data: user,
			message: 'Usuario Logueado',
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

module.exports = {
	login,
};
