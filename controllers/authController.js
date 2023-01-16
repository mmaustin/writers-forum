

const register = async (req, res) => {
    res.send(201).json({msg: 'user created'})
}
const login = async (req, res) => {
    res.send(20).json({msg: 'user logged in'})
}
const updateUser = async (req, res) => {
    res.send(200).json({msg: 'user updated'})
}

export {
    register,
    login,
    updateUser
}