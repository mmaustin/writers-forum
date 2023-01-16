

const register = async (req, res) => {
    res.send({msg: 'user created'})
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