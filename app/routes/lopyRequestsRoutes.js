const router = require('express').Router();
const lopyrequestsController = require('../controllers/lopyRequestsController');

router.get('/lopyrequests', lopyrequestsController.getAll);
router.get('/lopyrequests/:id', lopyrequestsController.get);
router.put('/lopyrequests/:id', lopyrequestsController.update);
router.delete('/lopyrequests/:id', lopyrequestsController.remove);
router.post('/lopyrequests', lopyrequestsController.add);

module.exports = router;