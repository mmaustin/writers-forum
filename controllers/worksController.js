import Work from "../models/Work.js";
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../error/index.js';

const createWork = async (req,res) => {
    const {title, genre, content, contributions} = req.body;

    if(!title || !genre || !content || !contributions){
        throw new BadRequestError('Please provide all values');
    }
    req.body.createdBy = req.user.userId;
    const work = await Work.create(req.body);
    res.status(StatusCodes.CREATED).json({work});
}

const getWork = async (req,res) => {
    res.send({msg: 'work retrieved'});
}
const getAllWorks = async (req,res) => {
    const allWorks = await Work.find({});
    res.status(StatusCodes.OK).json({allWorks, totalWorks: allWorks.length});
}
const updateWork = async (req,res) => {
    const { id: workId } = req.params
    const { title, genre, content, contributions } = req.body
  
    if (!title || !genre || !content || !contributions) {
      throw new BadRequestError('Please provide all values')
    }
    const work = await Work.findOne({ _id: workId })
  
    if (!work) {
      throw new NotFoundError(`No job with id :${workId}`)
    }
    
    checkPermissions(req.user, work.createdBy)

    const updatedWork = await Work.findOneAndUpdate({ _id: workId }, req.body, {
      new: true,
      runValidators: true,
    })
  
    res.status(StatusCodes.OK).json({ updatedWork })
}
const deleteWork = async (req,res) => {
    res.send({msg: 'work deleted'});
}

export {
    createWork,
    getWork,
    getAllWorks,
    updateWork,
    deleteWork
}