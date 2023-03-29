const clienmodel = require('../models/Cliente');
const regimodel = require('../models/Registro');

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

const login = async(req, res) => {
    console.log(req.body);

    try {
        const correo = req.body.correo;
        const contraseña = req.body.contraseña;
        const user = await regimodel.findOne({ $and: [{ correo: correo }, { Confcontraseña: contraseña }] });

        if (user?._id !== undefined) {
            res.json({
                data: user,
                statusCode: 200,
                message: "acceso autorizado",
                path: "login"
            })

        } else {
            res.json({
                error: { error: true },
                statusCode: 404,
                message: "ERROR",
                path: "login"
            })
        }

    } catch (error) {
        res.status(500).json({
            error: error,
            statusCode: 500,
            message: "ERROR",
            path: "clientes/create"

        })
        console.log(error);
    }

}

module.exports = {
    createUser,
    getclientes,
    login
};