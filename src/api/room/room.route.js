const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        message: 'This is room home'
    })
})

module.exports = router