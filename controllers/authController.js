import User from "../models/User.js";
import {StatusCodes} from 'http-status-codes';
import {BadRequestError, UnAuthenticatedError} from '../error/index.js'

const register = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      throw new BadRequestError('please provide all values')
    }
    const userAlreadyExists = await User.findOne({ email })
    if (userAlreadyExists) {
      throw new BadRequestError('Email already in use')
    }
    const user = await User.create({ name, email, password });

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

const fetchUsers = async (req, res) => {
  const allUsers = await User.find();
  res.status(StatusCodes.OK).json({allUsers});
}

const updateUser = async (req, res) => {
  const { email, name, favoriteGenre} = req.body
  if (!email || !name || !favoriteGenre) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ _id: req.user.userId })

  user.email = email;
  user.name = name;
  user.favoriteGenre = favoriteGenre;

  await user.save()

  const token = user.createJWT()

  res.status(StatusCodes.OK).json({ user, token})
}

export {
    register,
    login,
    fetchUsers,
    updateUser
}