import { User } from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Signup
export const signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).json({
            message: 'User created successfully'
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: 'Failed to signup',
            error: error.message
        });

    }
};


// Login
export const Login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const checkUser = await User.findOne({ email });

        if (!checkUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const match = await bcrypt.compare(
            password,
            checkUser.password
        );

        if (!match) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign(
            {
                id: checkUser._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            }
        );

        return res.status(200).json({
            message: 'Login successful',
            token
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: 'Failed to Login',
            error: error.message
        });

    }
};