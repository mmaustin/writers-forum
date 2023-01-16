

const createWork = async (reg,res) => {
    res.send({msg: 'work created'});
}

const getWork = async (reg,res) => {
    res.send({msg: 'work retrieved'});
}
const getAllWorks = async (reg,res) => {
    res.send({msg: 'works retrieved'});
}
const updateWork = async (reg,res) => {
    res.send({msg: 'work updated'});
}
const deleteWork = async (reg,res) => {
    res.send({msg: 'work deleted'});
}

export {
    createWork,
    getWork,
    getAllWorks,
    updateWork,
    deleteWork
}