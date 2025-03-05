
const bcrypt = require("bcrypt")
const UserModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

const JWR_SECRET_KEY = "MY_SECRET_KEY_12345"

const register = async (req, res, next) => {
    try {


        const response = await UserModel.create(req.body)
        res.json({
            success: true,
            message: "Register successfully",
            data: response
        })
    } catch (err) {
        next(err)
    }
}
const login = async (req, res, next) => {
    try {
        /**
         * Login Successful => email & password combination should match 
         */
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) {
            res.status(400)
                .json({
                    success: false,
                    message: "Incorrect user or Password"
                })
            return;
        }
        const isValidUser = await bcrypt.compare(req.body.password, user.password)
        if (isValidUser) {
            const currentTimeInSec = parseInt(Date.now()/1000);
            const tokenData ={
                iat:currentTimeInSec,
                exp:currentTimeInSec+3600,
                _id:user._id
            }
            const token =  jwt.sign(tokenData,JWR_SECRET_KEY)

            // DB update for this token /Store this token in DB

            await UserModel.findByIdAndUpdate(user._id,{token:token})
            res.json({
                success: true,
                message: "Login successfully",
                token:token
            })
            return
        };

        res.status(400).json({
            success: false,
            message: "Incorrect userName or Password"
        })
    } catch (err) {
        next(err)
    }
}

const userController = {
    register,
    login
}
module.exports = userController