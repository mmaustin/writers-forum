

const createWork = async (reg,res) => {
    res.send(201).json({msg: 'work created'});
}

const getWork = async (reg,res) => {
    res.send(200).json({msg: 'work retrieved'});
}
const getAllWorks = async (reg,res) => {
    res.send(201).json({msg: 'works retrieved'});
}
const updateWork = async (reg,res) => {
    res.send(201).json({msg: 'work updated'});
}
const deleteWork = async (reg,res) => {
    res.send(200).json({msg: 'work deleted'});
}

export {
    createWork,
    getWork,
    getAllWorks,
    updateWork,
    deleteWork
}