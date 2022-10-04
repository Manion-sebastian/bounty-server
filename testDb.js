const db = require('./models/index.js')

const bountyCrud = async () => {
    try {
        // const newBounty = await db.Bounty.create({
        //     name: 'John',
        //     wantedFor: 'Avoiding the new god',
        //     client: 'Garfield',
        //     ship: 'SS Lasagne Spear',
        //     reward: 30000000000,
        //     captured: false,
        //     lastSeen: 'Three years ago'
        // })
        
        // const findBounty = await db.Bounty.find()
        // console.log(findBounty)

        // const updateBounty = await db.Bounty.findOneAndUpdate({
        //     name: 'John'
        // }, {captured: true}, {new:true})
        // console.log(updateBounty)

        // const removeBounty = await db.Bounty.findOneAndRemove({
        //     name: 'John'
        // })


    } catch(err) {
        console.warn(err)
    }
}

bountyCrud()