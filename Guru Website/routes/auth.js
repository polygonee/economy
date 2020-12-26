const router = require('express').router();

router.get('/', (req, res) => {
    res.send(200)
});

module.exports = router;