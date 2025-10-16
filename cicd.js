// import express from "express"
const express = require("express")

const app = express()
const PORT = 5500

app.get("/", (req, res) => {
    return res.send("Hello, CI/CD Students!");
    res.end()
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
    
})

module.exports = app