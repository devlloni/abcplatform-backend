require('dotenv').config();
const

    aws         =   require('aws-sdk'),
    multer      =   require('multer'),
    multerS3    =   require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.secret_AWS_S3,
    accessKeyId: process.env.keyid_AWS_S3,
    region: 'us-east-2'
});

const s3 = new aws.S3();

const imageFilter = ( req, file, cb ) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'
        || file.mimetype === 'application/pdf'
    ){
        cb(null, true);
    }else{
        cb(new Error('Invalid Image Type, only JPEG and PNG'));
    }
}

const upload = multer({
    fileFilter: imageFilter,
    storage: multerS3({
        s3: s3,
        bucket: 'abcplatform.storage',
        acl: 'public-read',
        metadata: function (req, file, cb){
            cb(null,  {fieldName: 'TESTING_META_DATA'});
        },
        key: function (req, file, cb){
            cb(null, Date.now().toString())
        }
    })
});

module.exports = upload;