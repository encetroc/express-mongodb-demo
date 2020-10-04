const express = require('express')
const Post = require('../models/Post')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (err) {
        res.send({message: err})
    }
})

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedPost = await post.save()
        res.send(savedPost)
    } catch (err) {
        res.send({message: err})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.send(post)
    } catch (err) {
        res.send({message: err})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.remove({_id: req.params.id})
        res.send(post)
    } catch (err) {
        res.send({message: err})
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const post = await Post.updateOne(
            {_id: req.params.id},
            {$set: {
                title: req.body.title
            }}
            )
        res.send(post)
    } catch (err) {
        res.send({message: err})
    }
})

module.exports = router