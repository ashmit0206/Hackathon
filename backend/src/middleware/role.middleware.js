import { apierror } from "../utils/apiError.js";

/**
 * Role-based access control middleware
 * @param {string} role - allowed role (e.g. "provider", "admin")
 */
export const checkRole = (role) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== role) {
            throw new apierror(403, "Access denied");
        }
        next();
    };
};
