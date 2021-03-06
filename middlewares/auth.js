const jwt = require('jsonwebtoken');

module.exports = function ( req, res, next ) {
    //Leer el token del header
    const token = req.header('x-auth-token');
    //Revisamos si no existe
    if(!token){
        return res.status(401).json({msg: 'No hay token, permiso denegado'});
    }
    //Validar el token
    try {
        const cifrado = jwt.verify(token, process.env.secretword);
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token no valido'});
    }
}