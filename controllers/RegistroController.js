const regimodel = require('../models/Registro');

const CreateRegi = async(req, res) => {
    if (regimodel.contraseña === regimodel.Confcontraseña) {
        try {
            console.log(req.body);
            const newCus = regimodel(req.body);
            await newCus.save();

            res.json({
                data: newCus,
                statusCode: 200,
                message: "Registro creado",
                path: "registro/create"
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error,
                statusCode: 500,
                message: "ERROR",
                path: "registro/create"
            })
        }
    } else {
        console.log(error);
        res.status(500).json({
            error: error,
            statusCode: 500,
            message: "ERROR FALTAN DATOS"
        })
    }
}

module.exports = {
    CreateRegi
}