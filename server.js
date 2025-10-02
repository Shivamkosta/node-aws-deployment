const express = require('express');

const app = express()
const PORT = process.env.PORT || 5000

app.get("/api/get", (req, res) => {
    res.send({message: "Nodejs AWS Deployment"});
})

app.listen(PORT, (req,res) => {
    console.log(`server is running on port ${PORT}`)
})