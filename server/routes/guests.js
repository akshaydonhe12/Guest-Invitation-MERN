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

// create Guest route

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
        res.json(guest)
    } catch (error) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// delete route

router.delete('/:id', auth, async(req, res) => {
    try {
        let guest = await Guest.findById(req.params.id)
        if(!guest){
            return res.status(404).json({
                msg:"Guest Not Found"
            })
        }
        await Guest.findByIdAndRemove(req.params.id)
        res.send('guest removed')
    } catch (error) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// update route

router.put('/:id', auth, async(req, res) => {
    const{name, phone, dietary, isconfirmed} = req.body
    const updateGuest = {name, phone, dietary, isconfirmed}

    try {
        let guest = await Guest.findById(req.params.id)
        if(!guest){
            return res.status(404).json({
                msg:"Guest Not Found"
            })
        }
        guest = await Guest.findByIdAndUpdate(req.params.id, {$set: updateGuest}, {new: true})
        res.send(guest)
    } catch (error) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


module.exports= router