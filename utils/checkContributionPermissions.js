import { UnAuthenticatedError } from "../error/index.js";

const checkContributionPermissions = (requestUser, resourceUserId) => {
    if (requestUser.userId === resourceUserId) return
  
    throw new UnAuthenticatedError('Not authorized to access this route')
  }

  export default checkContributionPermissions;