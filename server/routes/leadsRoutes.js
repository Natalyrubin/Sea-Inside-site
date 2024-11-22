const router = require('express').Router();
const { signUp } = require('../controllers/leadsControllers');




router.post('/', signUp)



module.exports = router;