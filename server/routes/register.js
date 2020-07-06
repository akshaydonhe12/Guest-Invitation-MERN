const router  = require("express").Router();
const {check, validationResult} = require('express-validator');


router.post('/',
[
    check ('name', 'Please provide a name').not().isEmpty()
],
(req, res)=> {
    const {name, email, password} = req.body
})

module.exports = router;