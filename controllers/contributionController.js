import Contribution from '../models/Contribution.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../error/index.js';
import checkPermissions from "../utils/checkPermissions.js";

const createContribution = async(req, res) => {
    console.log('contribution created');
}

const getContributions = async (req, res) => {
    console.log('contributions received');
}

const deleteContribution = async (req, res) => {
    console.log('contribution deleted');
}

export {createContribution, getContributions, deleteContribution};