
const bcrypt = require("bcrypt")
const UserModel = require("../models/user.model")
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
            res.json({
                success: true,
                message: "Login successfully"
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