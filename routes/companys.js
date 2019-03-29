const express = require("express")
const company = express.Router()
const cors = require("cors")

const Company = require("../models/company")
company.use(cors())

company.post("/register", (req, res) => {
    const bitdata = {
        companyName: req.body.name
    }
    Company.create(bitdata)
            .then(
                res.json({ status: ' registered' })
    )
    .catch(err => {
        res.send('error: ' + err)
    })

})

company.get("/getAll", (req,res) => {
    Company.findAll()
            .then(projects => {
                // projects will be an array of all Project instances
                res.json({projects})
              }  
    )
    .catch(err => {
        res.send('error: ' + err)
    })

})

module.exports = company