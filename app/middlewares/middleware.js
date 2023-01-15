const multer = require('multer');
const { v4 : uuidv4 } =require('uuid');
const express = require('express');
const path = require('path');
const appm = express();

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLowerCase());
    }
});
appm.use(multer({
    storage: storage,
    dest: path.join(__dirname, '../public/uploads'),
    //limits: {fileSize: 2000000},
    fileFilter: (req, file, cb) => {
        const filetypes = /jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname))
        if (mimetype && extname) {
            return cb(null, true);
        } 
        cb(new Error('Error tipo de archivo no aceptado. No puedo lograr devolver un mensaje flash desde aca :('))
    }
}).single('image'));

module.exports = appm;