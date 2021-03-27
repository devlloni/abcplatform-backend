const 

    upload      =   require('../services/fileUpload');


const singleUpload = upload.single('image');

const multipleUpload = upload.array('images');

const pdfSingleUpload = upload.single('pdf');
const multiplePdfUpload = upload.array('pdfs');

exports.uploadPdf = async ( req, res ) => {
    pdfSingleUpload( req, res, (err) => {
        if(err){
            return res.status(422).send({errors: [{title: 'Error al subir PDF', details: err.message}]});
        }
        return res.status(200).json([req.file.location]);
    })
}

exports.uploadPdfs = async ( req, res ) => {
    multiplePdfUpload( req, res, (err) => {
        if(err){
            return res.status(422).send({errors: [{title: 'Error al subir pdfs', details: err.message}]});
        }
        let mapped = req.files.map( f => f.location);
        return res.status(200).json(mapped);
    })
}

exports.uploadImage = async ( req, res ) => {
    singleUpload( req, res, (err)=>{
        if(err){
            return res.status(422).send({errors: [{title: 'Error al subir imagen', details: err.message}]})
        }
        return res.status(200).json([req.file.location]);
    })
}

exports.uploadImages = async ( req, res ) => {
    multipleUpload( req, res, (err)=>{
        if(err){
            return res.status(422).send({ errors: [{title: 'Error al subir las imagenes', details: err.message}]});
        }
        let mapped = req.files.map( f => f.location);
        return res.status(200).json(mapped);
    })
}
