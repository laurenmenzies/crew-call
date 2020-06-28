const router = require('express').Router();
const { Production } = require('../db/models');

router.get('/', async (req, res, next) => {
    try {
        const productions = await Production.findByPk();
        res.send(productions)
    } catch (err) {
        next(err);
    }
})

module.exports = router;