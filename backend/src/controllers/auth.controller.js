import User from "../models/user.models.js";
import { apierror } from "../utils/apierror.js";
import { apiresponse } from "../utils/apiresponse.js";
import { asynchandler } from "../utils/asynchandler.js";


const generateaccessandrefreshtokens = async(userId)=>{
    const user = await User.findById(userId);
    if (!user) {
        throw new apierror(404, "User not found");
    }
    const accessToken = user.createaccesstoken();
    const refreshToken = user.createrefreshtoken();
    return { accessToken, refreshToken };
}

const registeruser = asynchandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        throw new apierror(400, "All fields are required");
    }

    // 1️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new apierror(409, "User already exists with this email");
    }

    // 2️⃣ Force default role
    const newUser = await User.create({
        username,
        email,
        password,
        role: "patient"
    });

    if (!newUser) {
        throw new apierror(500, "Failed to create user");
    }

    // 3️⃣ Generate tokens
    const { accessToken, refreshToken } =
        await generateaccessandrefreshtokens(newUser._id);

    newUser.refreshtoken = refreshToken;
    await newUser.save({ validateBeforeSave: false });

    // 4️⃣ Remove sensitive fields
    const saveduser = await User.findById(newUser._id)
        .select("-password -refreshtoken");

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000
    };

    return res
        .status(201)
        .cookie("accesstoken", accessToken, options)
        .cookie("refreshtoken", refreshToken, options)
        .json(
            new apiresponse(
                201,
                {
                    user: saveduser
                },
                "User registered successfully"
            )
        );
});


const Loginuser = asynchandler(async (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !password) {
        throw new apierror(400, "Email and password are required");
    }

    // 1️⃣ Find user
    const user = await User.findOne({ email });

    if (!user) {
        throw new apierror(404, "User not found");
    }

    // 2️⃣ Check password
    const isPasswordCorrect = await user.ispasswordcorrect(password);
    if (!isPasswordCorrect) {
        throw new apierror(401, "Invalid credentials");
    }

    // 3️⃣ Role validation (IMPORTANT)
    if (role && user.role !== role) {
        throw new apierror(403, "Access denied for this role");
    }

    // 4️⃣ Generate tokens
    const { accessToken, refreshToken } =
        await generateaccessandrefreshtokens(user._id);

    user.refreshtoken = refreshToken;
    await user.save({ validateBeforeSave: false });

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000
    };

    // 5️⃣ Send role to frontend
    return res
        .status(200)
        .cookie("accesstoken", accessToken, options)
        .cookie("refreshtoken", refreshToken, options)
        .json(
            new apiresponse(
                200,
                {
                    user: {
                        _id: user._id,
                        email: user.email,
                        role: user.role
                    },
                    accessToken,
                    refreshToken
                },
                "User logged in successfully"
            )
        );
});

const Logoutuser = asynchandler(async (req, res) => {
    const user = req.user;

    if (!user) {
        throw new apierror(401, "Unauthorized request");
    }

    // 1️⃣ Remove refresh token from DB
    await User.findByIdAndUpdate(
        user._id,
        {
            $unset: { refreshtoken: 1 }
        },
        { new: true }
    );

    // 2️⃣ Clear cookies
    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "None"
    };

    return res
        .status(200)
        .clearCookie("accesstoken", options)
        .clearCookie("refreshtoken", options)
        .json(
            new apiresponse(200, null, "User logged out successfully")
        );
});



export {
    registeruser,
    Loginuser,
    Logoutuser
}