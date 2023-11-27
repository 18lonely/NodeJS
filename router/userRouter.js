const express = require('express')
const router = express.Router()

// http:localhost:8080/user/
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Successful - GET",
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    })
})

// http:localhost:8080/user/{id}
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: "Successful - Get by ID",
        hostname: req.hostname,
        method: req.method
    })
})

// http:localhost:8080/user/
router.post('/', (req, res, next) => {
    const name = req.body.name
    res.status(201).json({
        message: "Successful - POST",
        metadata: {
            name: name,
            hostname: req.hostname,
            method: req.method
        }
    })
})

// http:localhost:8080/user/{id}
router.put('/:id', (req, res, next) => {
    res.status(200).json({
        message: "Successful - Put by ID",
        hostname: req.hostname,
        method: req.method
    })
})

// http:localhost:8080/user/{id}
router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: "Successful - Delete by ID",
        hostname: req.hostname,
        method: req.method
    })
})

module.exports = router