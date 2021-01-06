const Role = require('../models/Role');


exports.getRoles = async ( req, res ) => {
    let roles = await Role.find({});
    if(roles.length > 0){
        return res.status(200).json({roles});
    }
    else{
        
        return res.status(200).json({roles: 0, msg: 'No hay roles cargados'});
    }
}