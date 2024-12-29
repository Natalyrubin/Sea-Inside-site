const router = require('express').Router();
const { signUp } = require('../controllers/leadsControllers');

// Handle POST request for signing up a lead
router.post('/', (req, res, next) => {
    try {
        signUp(req, res);
    } catch (error) {
        next(error);
    }
});

// Export the router
module.exports = router;
