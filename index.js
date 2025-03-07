const express = require("express")
const app = express();
const dotenv=require("dotenv")
const mongoose = require("mongoose")
const userRoutes = require("./routes/user.route")
const productRoutes = require("./routes/product.route")
const cartRouter = require("./routes/cart.route")
const couponRouter = require("./routes/coupon.route")
dotenv.config();
const portNo = process.env.PORT_NO;
const DB_URL = process.env.DB_URL;

//Global Middlewares
app.use(express.json());

// Modular routes
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/product",productRoutes)
app.use("/api/v1/cart",cartRouter)
app.use("/api/v1/coupon",couponRouter)

mongoose
    .connect(DB_URL)
    .then(() => console.log(`DB Connected successfully`))
    .catch(err => console.error("ERROR While Connecting DataBase", err))

app.listen(portNo, () => console.log(`eComm services are up and running at port ${portNo}`))
