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
    const allWorks = await Work.find();
    res.status(StatusCodes.OK).json({allWorks});
}
const updateWork = async (req,res) => {
    res.send({msg: 'work updated'});
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