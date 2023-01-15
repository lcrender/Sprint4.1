const {Router}  = require('express');
const router = Router();
const {
    exportJson,
    uploadFile } = require('../controllers/controllers')

router.get('/user', exportJson);
router.post("/upload", uploadFile);

module.exports = router;