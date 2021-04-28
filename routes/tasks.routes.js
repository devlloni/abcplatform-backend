const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const auth = require('../middlewares/auth');

router.post('/',
    // auth,  
    taskController.postNewTask
);

router.get('/',
    // auth,
    taskController.getTasks
);

router.get('/:userId',
    // auth
    taskController.getTaskUser
);

module.exports = router;