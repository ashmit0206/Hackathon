import jwt from "jsonwebtoken";
import {User} from "../models/user.model.js";
import { apierror } from "../utils/apiError.js";
import { asynchandler } from "../utils/asyncHandler.js";

export const verifyjwt = asynchandler(async (req, res, next) => {
    const token =
        req.cookies?.accesstoken ||
        req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        throw new apierror(401, "Unauthorized request");
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded?._id).select(
        "-password -refreshtoken"
    );

    if (!user) {
        throw new apierror(401, "Invalid access token");
    }

    req.user = user;
    next();
});
``
