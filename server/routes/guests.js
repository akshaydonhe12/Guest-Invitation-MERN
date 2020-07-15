const router = require('express').Router()
const auth =require('../middleware/auth')
const {check, validationResult} = require('express-validator')

// Guest Model
const Guest = require('../models/Guest');

router.get('/',auth, async(req, res)=> {
    try {
        const guests = await Guest.find({user: req.user.id})
        res.json(guests)
    } catch (error) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

router.post('/',auth,
[
    check('name', 'Please provide a name').not().isEmpty(),
    check('phone', 'Please provide a phone').not().isEmpty()
],
async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
    }
    const {name, phone, dietary, isconfirmed}= req.body
    try {
        let guest = new Guest({
            user:req.user.id,
            name,
            phone,
            dietary,
            isconfirmed
        })
        guest = await guest.save()
    } catch (error) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})




module.exports= router