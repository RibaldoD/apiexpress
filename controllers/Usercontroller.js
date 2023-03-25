const clienmodel = require('../models/Cliente');

const createUser = async(req, res) => {
    try {
        console.log(req.body);
        const newCustomer = clienmodel(req.body);
        await newCustomer.save();

        res.json({
            data: newCustomer,
            statusCode: 200,
            message: "Cliente creado",
            path: "clientes/create"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
            statusCode: 500,
            message: "ERROR",
            path: "clientes/create"
        })
    }
}

const getclientes = async(req, res) => {
    try {
        const clientes = await clienmodel.find({})
        res.json({
            data: clientes,
            statusCode: 200,
            message: "Cliente creado",
            path: "clientes/create"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
            statusCode: 500,
            message: "ERROR",
            path: "clientes/create"
        })
    }
}
module.exports = {
    createUser,
    getclientes
};