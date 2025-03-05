const productCreate = async (req, res, next) => {
    try {
        res.json({
            success : true,
            message:"Create Api"
        })
    } catch (err) {
        next(err)
    }
}

const productLists = async (req, res, next) => {
    try {
        res.json({
            success : true,
            message:"Lists Api"
        })
    } catch (err) {
        next(err)
    }
}

const productController={
    productCreate,
    productLists
}
module.exports = productController