const express = require('express');

const app = express()
const PORT = process.env.PORT || 5000

app.get("/api/get", (req, res) => {
    res.send({message: "Nodejs AWS Deployment"});
})

app.get("/api/user", (req, res) => {
    res.send({name: "shivam", email: "shivam@gmail.com", role: "Developer"})
})
app.listen(PORT, (req,res) => {
    console.log(`server is running on port ${PORT}`)
})