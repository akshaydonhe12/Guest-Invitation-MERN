const router  = require("express").Router();
const {check, validationResult} = require('express-validator');


router.post('/',
[
    check ('name', 'Please provide a name').not().isEmpty(),
    check('email', 'Please provide a email').isEmail(),
    check('password', 'Pleasse provide 4 character password').isLength({min: 4 })
],

(req, res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.array()
        })
    }
    res.send('User Register Succesfully')

    const {name, email, password} = req.body
})

module.exports = router;