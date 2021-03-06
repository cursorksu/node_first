const { Router } = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = Router();
const config = require('config');

router.post(
	'/register',
	[
		check('email', 'Некорректный email').isEmail(),
		check('password', 'Минимальная длинна пароля 6 символов' )
			.isLength({ min: 6 })
	],
	async (req, res) => {
		console.log(res.body, req.body)
	try {
		const errors = validationResult(req);

		if(!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				message: 'Некорректные данные при регистрации'
			})
		}

		const {email, password} = req.body;
		const candidate = await  User.findOne({ email });

		if(candidate) {
			res.status(400).json({ message: 'Такой пользователь уже существует' })
		}

		const hashedPassword = await bcrypt.hash(password, 12);
		const user = new User({ email, password: hashedPassword });
		await  user.save();

	} catch (e) {
		res.status(500).json({message: 'Something wrong, try again '})
	}
});
router.post(
	'/login',
	[
		check('email', 'Введите корректный email').normalizeEmail().isEmail(),
		check('password', 'Ведите пароль' ).exists()
		.isLength({ min: 6 })
	],
	async (req, res) => {
	try {
		const errors = validationResult(req);

		if(!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				message: 'Некорректные данные при входе в систему'
			})
		}

		const {email, password} = req.body;
		const user = await  User.findOne({ email });

		if(!user) {
			res.status(400).json({ message: 'Такой пользователь не найден' })
		}

		const isMatch = await bcrypt.compare(password, user.password)

		const token = jwt.sing(
			{ userId: user.id},
			config.get('jwtSecret'),
			{expiresIn: '1h'},
		);

		res.json({token, userId: user.id})

		if (!isMatch) {
			return res.status(400).json({message: 'Неверный пароль, попробуйте снова'})
		}

	} catch (e) {
		res.status(500).json({message: 'Something wrong, try again '})
	}

});

module.exports = router;