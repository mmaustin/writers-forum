import User from "../models/User.js";
import {StatusCodes} from 'http-status-codes';
import {BadRequestError, UnAuthenticatedError} from '../error/index.js'

const register = async (req, res) => {
    const { name, email, password, favoriteGenre } = req.body

    if (!name || !email || !password || !favoriteGenre) {
      throw new BadRequestError('please provide all values')
    }
    const userAlreadyExists = await User.findOne({ email })
    if (userAlreadyExists) {
      throw new BadRequestError('Email already in use')
    }
    const user = await User.create({ name, email, password, favoriteGenre });

    res.status(StatusCodes.CREATED).json({user});
}

const login = async (req, res) => {
    res.send({msg: 'user logged in'})
}
const updateUser = async (req, res) => {
    res.send({msg: 'user updated'})
}

export {
    register,
    login,
    updateUser
}