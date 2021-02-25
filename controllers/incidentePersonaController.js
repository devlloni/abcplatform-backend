const IncidentePersona = require('../models/Incidentes/IncidentePersona');
const moment = require('moment');
exports.getIncidentes = async ( req, res ) => {
    let incidentes = await IncidentePersona.find({});
    return res.status(200).json(incidentes);
}

exports.getIncidenteId = async ( req, res ) => {
    if(req.params.id){
        let { id } = req.params;
        let incidente = await IncidentePersona.find({_id: id})
        return res.status(200).json({incidente});
    }else{
        return res.status(403).json({
            msg: 'no id'
        });
    }
}

exports.postIncidente = async ( req, res ) => {
    const { usuario, compania, puesto, lugar, denuncia, tipo, numerosiniestro, fechadenuncia, 
        fechaincidente, horaincidente, gravedad, horaingreso, sector, turno, jefeacargo, testigos,
        estabaenpuesto, trabajohabitual, recalificacion, forma, agentematerial, naturaleza, zonacuerpo,
        fechaalta, diasbaja, codigo, sucursal, investigacion, titulo } = req.body;
        
        try {
            let incidente = new IncidentePersona(req.body);
            await incidente.save();
            if(incidente){
                return res.status(200).json({incidente});
            }else{
                return res.status(403).json({
                    msg: 'error'
                })
            }
        } catch (error) {
            throw error;
            return res.status(403).json({
                msg: 'Error en el servidor'
            });
        }
}