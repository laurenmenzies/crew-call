const router = require('express').Router();
const { Task } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.findAll();
        res.send(tasks)
    } catch (err) {
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const taks = await Task.creat(req.body);
        res.send(task);
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;