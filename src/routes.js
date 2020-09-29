const Express = require('express');
const router = Express.Router();
const routerPublic = require('./routes/Public')

router.use('/',routerPublic);

module.exports = router;