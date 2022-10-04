const express = require('express')
const db = require('../models')
const router = express.Router()

// GET /bounty -- return array of all bounties
router.get('/', async (req,res) => {
    try {
        const bounties = await db.Bounty.find({})
        res.status(200).json(bounties)

    } catch(err) {
        console.warn(err)
        res.status(500).json({message:'uhheheheuhhaheug'})
    }
})

// GET /bounty/:id -- return single bounty
router.get('/:id', async (req,res) => {
    try {
        const bounty = await db.Bounty.findById(req.params.id)
        res.status(200).json(bounty)

    } catch(err) {
        console.warn(err)
        res.status(500).json({message:'uhheheheuhhaheug'})

    }
})

// POST /bounty -- create a new bounty in the db
router.post('/', async (req,res) => {
    try {
        const newBounty = await db.Bounty.create(req.body)
        res.status(201).json({newBounty})
    } catch(err) {
        console.warn(err)
        res.status(500).json({message:'uhheheheuhhaheug'})
    }
})

// PUT /bounty/:id -- update a single bounty
router.put('/:id', async (req,res) => {
    try {
        const options = {new:true}
        const updatedBounty = await db.Bounty.findByIdAndUpdate(req.params.id, req.body, options)
        res.status(200).json(updatedBounty)

    } catch(err) {
        console.warn(err)
        res.status(500).json({message:'uhheheheuhhaheug'})

    }
})


// DELETE /bounty/:id -- delete a single bounty

router.delete('/:id', async (req,res) => {
    try {
        await db.Bounty.findByIdAndDelete(req.params.id)
        res.sendStatus(204)

    } catch(err) {
        console.warn(err)
        res.status(500).json({message:'uhheheheuhhaheug'})

    }
})


module.exports = router