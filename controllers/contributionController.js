import Contribution from '../models/Contribution.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../error/index.js';
import checkPermissions from "../utils/checkPermissions.js";

const createContribution = async(req, res) => {
    const {contributor, content, createdBy, originalAuthorId} = req.body;

    if(!contributor || !content || !createdBy || !originalAuthorId){
        throw new BadRequestError('Please provide all values');
    }

    const contribution = await Contribution.create(req.body);

    res.status(StatusCodes.CREATED).json({contribution});
}

const getContributions = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'contributions fetched'});
}

const deleteContribution = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'contribution deleted'});
}

export {createContribution, getContributions, deleteContribution};