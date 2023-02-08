import Work from "../models/Work.js";
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../error/index.js';
import checkPermissions from "../utils/checkPermissions.js";

const createWork = async (req,res) => {
    const {title, genre, content, contributions, name} = req.body;

    if(!title || !genre || !content || !contributions || !name){
        throw new BadRequestError('Please provide all values');
    }
    req.body.createdBy = req.user.userId;
    const work = await Work.create(req.body);
    res.status(StatusCodes.CREATED).json({work});
}

// const getUserWorks = async (req,res) => {
//     //To be placed in a separate function, get all works
//     const allWorks = await Work.find({});
//     //The proper functionality for this function
//     //const allWorks = await Work.find({createdBy: req.user.userId});
//     res.status(StatusCodes.OK).json({allWorks, totalWorks: allWorks.length});
// }

const getWorks = async (req,res) => {
    //To be placed in a separate function, get all works
    const allWorks = await Work.find({});
    //The proper functionality for this function
    //const allWorks = await Work.find({createdBy: req.user.userId});
    res.status(StatusCodes.OK).json({allWorks, totalWorks: allWorks.length});
}
const updateWork = async (req,res) => {
    const { id: workId } = req.params
    const {name, title, genre, content, contributions} = req.body
    
    if (!name || !title || !genre || !content || !contributions) {
        throw new BadRequestError('Please provide all values')
    }
    const work = await Work.findOne({ _id: workId })
    
    if (!work) {
        throw new NotFoundError(`No work with id :${workId}`)
    }
    
    checkPermissions(req.user, work.createdBy)
    
    const updatedWork = await Work.findOneAndUpdate({ _id: workId }, req.body, {
        new: true,
        runValidators: true,
    })
    
    res.status(StatusCodes.OK).json({ updatedWork })
}

const getWork = async (req,res) => {
    const {id: workId} = req.params;

    const work = await Work.findOne({_id: workId});

    if (!work) {
        throw new NotFoundError(`No work with id :${workId}`)
    }

    res.status(StatusCodes.OK).json({ work });
}

const deleteWork = async (req,res) => {
    const { id: workId } = req.params

    const work = await Work.findOne({ _id: workId })
  
    if (!work) {
      throw new NotFoundError(`No work with id :${workId}`)
    }
  
    checkPermissions(req.user, work.createdBy)
  
    await work.remove()
  
    res.status(StatusCodes.OK).json({ msg: 'Success! Work removed' })
}

export {
    createWork,
    getWork,
    getWorks,
    updateWork,
    deleteWork
}