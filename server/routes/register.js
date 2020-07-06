const router  = require("express").Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt')


//User Model
 const User = require('../models/User')

router.post('/',
[
    check ('name', 'Please provide a name').not().isEmpty(),
    check('email', 'Please provide a email').isEmail(),
    check('password', 'Pleasse provide 4 character password').isLength({min: 4 })
],
async(req, res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.array()
        })
    }

    const {name, email, password} = req.body
    try{
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                msg:'user already exists'
            })
        }
        user = new User({
            name,
            email,
            password
        })
        //const salt = await bcrypt.genSalt(10)
        //user.password = await bcrypt.hash(password, salt)

        //await user.save()
    }catch (err){

    }
})

module.exports = router;