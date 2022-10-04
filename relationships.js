const db = require('./models')

const commentCrud = async () => {
    try {
        const newBlog = await db.Blog.findOneAndUpdate(
            {title: 'I love mongoose 💖'},
            {body: 'You should really try mongoose, it is the bees knees.'},
            {upsert:true, new:true}
        )

        console.log(`new blog`, newBlog)

        // create
        const newComment = {
            header: 'Omg so true!',
            content: 'I am also in love with the man goose'
        }

        // newBlog.comments.push(newComment)
        // await newBlog.save()

        // read

        const foundComment = newBlog.comments.id("commentId")
        // console.log('found a comment:', foundComment)

        // update

        // foundComment.content = '🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈'
        // // save the parent doc (this is async)
        // await newBlog.save()

        // delete
        // newBlog.comments[1].remove() // remove comment at index 1
        // foundComment.remove() // makes a comment remove itself from the array
        // // save the parent doc
        // newBlog.save()

    } catch(err) {
        console.warn(err)
    }
}

commentCrud()

const userCrud = async () => {
    try {
        // CREATE (associate)
        const newUser = await db.User.create({
            name: 'Sebastian'
        })

        // find a blog to associate with user. 
        const foundBlog = await db.Blog.findOne({}) // find first blog
        // push the blog into the users array of blogs,
        newUser.push(foundBlog)
        // add the user as the blogs blogger
        foundBlog.blogger = newUser
        // save both models. 
        await newUser.save()
        await foundBlog.save()

    } catch(err) {
        console.warn(err)

    }
}

userCrud()