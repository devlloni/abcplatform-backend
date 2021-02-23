const IncidentePropiedad = require('../models/Incidentes/IncidentePropiedad');

exports.getIncidentesPropiedad = async ( req, res ) => {
    let incidentes = await IncidentePropiedad.find({});
    return res.status(200).json({incidentes});
}

exports.getIncidentesPropiedadId = async ( req, res ) => {
    if(req.params.id){
        let { id } = req.params;
        let incidente = await IncidentePropiedad.find({_id: id})
        return res.status(200).json({incidente});
    }else{
        return res.status(403).json({
            msg: 'no id'
        });
    }
    
}

exports.postIncidentePropiedad = async ( req, res ) => {
    const { empresa, lugar, sucursal, sector, titulo, tipoIncidente, gravedad, investigacion} = req.body;
    if(!empresa){
        return res.status(203).json({
            msg: 'Error, no hay empresa asignada.'
        });
    }else{
        if(!titulo || !tipoIncidente || !gravedad || !investigacion){
            return res.status(403).json({
                msg: 'Faltan datos'
            });
        }else{
            let format = {
                compania: empresa,
                ...(lugar && {lugar: lugar}),
                ...(sector && {sector: sector}),
                sucursal: sucursal,
                titulo: titulo,
                tipoIncidente: tipoIncidente,
                gravedad: gravedad,
                investigacion: investigacion
            }
            try {
                let incidente = new IncidentePropiedad(format);
                await incidente.save();
                return res.status(200).json({incidente});
            } catch (error) {
                return res.status(402).json({
                    msg: 'error',
                    error
                });
            }

        }
    }
}