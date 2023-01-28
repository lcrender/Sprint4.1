const { Router } = require('express');
const router = Router();
const {
    exportJson,
    uploadFile,
    userTime,
    pokemon } = require('../controllers/controllers');
 const auth = require('../middlewares/auth')

router.get('/user', exportJson);
router.post('/upload', uploadFile);
router.post('/time', userTime);
router.get("/pokemon/:id", pokemon);

module.exports = router;