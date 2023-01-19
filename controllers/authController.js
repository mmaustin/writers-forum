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

    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({
      user: {
        name: user.name,
        email: user.email,
        favoriteGenre: user.favoriteGenre
      },
      token
    })
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token})
}

const updateUser = async (req, res) => {
    res.send({msg: 'user updated'})
}

export {
    register,
    login,
    updateUser
}