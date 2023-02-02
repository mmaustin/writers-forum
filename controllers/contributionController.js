import Contribution from '../models/Contribution.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../error/index.js';
import checkContributionPermissions from '../utils/checkContributionPermissions.js';

const createContribution = async(req, res) => {
    const {contributor, contributorId, content, createdBy, originalAuthorId} = req.body;

    if(!contributor || !contributorId || !content || !createdBy || !originalAuthorId){
        throw new BadRequestError('Please provide all values');
    }

    checkContributionPermissions(req.user, contributorId);

    const contribution = await Contribution.create(req.body);

    res.status(StatusCodes.CREATED).json({contribution});
}

const getContributions = async (req, res) => {
    const {id: workId} = req.params;

    // const workContributions = await Contribution.find({createdBy: workId});
    const workContributions = await Contribution.find({});
    
    // if (!workContributions) {
    //     throw new NotFoundError(`No contributions found for work with this id: ${workId}`)
    // }

    res.status(StatusCodes.OK).json({ workContributions, totalWorkContributions: workContributions.length });
}

const deleteContribution = async (req, res) => {
    const { id: contributionId } = req.params

    const contribution = await Contribution.findOne({ _id: contributionId })
  
    if (!contribution) {
      throw new NotFoundError(`No contribution with id :${contributionId}`)
    }
  
    checkContributionPermissions(req.user, contribution.originalAuthorId)
  
    await contribution.remove();
  
    res.status(StatusCodes.OK).json({ msg: 'Success! Contribution removed' })
}

export {createContribution, getContributions, deleteContribution};