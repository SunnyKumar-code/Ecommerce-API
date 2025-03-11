const express = require("express")
const app = express();
const dotenv=require("dotenv")
const mongoose = require("mongoose")

const userRoutes = require("./routes/user.route")
const productRoutes = require("./routes/product.route")
const cartRouter = require("./routes/cart.route")
const couponRouter = require("./routes/coupon.route")
const orderRouter = require("./routes/order.route")

const authMiddleware = require("./middlewares/authMiddleware")

const cookieParser = require("cookie-parser")
const cors = require("cors")

dotenv.config();
const portNo = process.env.PORT_NO;
const DB_URL = process.env.DB_URL;

const corsOptions={
    origin:'http://127.0.0.1:5500'
}

//Global Middlewares
app.use(express.json());
app.use(cookieParser())
app.use(cors(corsOptions))

// Modular routes
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/product",authMiddleware, productRoutes)
app.use("/api/v1/cart",authMiddleware,cartRouter)
app.use("/coupon",authMiddleware,couponRouter)
app.use("/api/v1/order",authMiddleware,orderRouter)

mongoose
    .connect(DB_URL)
    .then(() => console.log(`DB Connected successfully`))
    .catch(err => console.error("ERROR While Connecting DataBase", err))

app.listen(portNo, () => console.log(`eComm services are up and running at port ${portNo}`))
