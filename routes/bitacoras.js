const express = require("express")
const bitacora = express.Router()
const cors = require("cors")

const Bitacora = require("../models/bitacora")
bitacora.use(cors())

bitacora.post("/register", (req, res) => {
    const today = new Date()
    const bitdata = {
        companyName: req.body.company,
        place: req.body.place,
        municipio: req.body.municipio,
        begins: today,
        ends: today,
        date: today,
        unitOp: req.body.unitOp,
        recolector: req.body.recolector,
        plates: req.body.plates,
        observations: req.body.observations,
        PET: req.body.PET,
        HDPE: req.body.HDPE,
        blanc: req.body.blanc,
        mix: req.body.mix,
        newspaper: req.body.newspaper,
        paperboard: req.body.paperboard,
        aluminium: req.body.aluminium,
        metal: req.body.metal,
        multilayer: req.body.multilayer,
        electronics: req.body.electronics,
        others: req.body.others
    }
    Bitacora.create(bitdata)
            .then(
                res.json({ status: ' registered' })
    )
    .catch(err => {
        res.send('error: ' + err)
    })

})


bitacora.get("/getSpesific", (req,res) => {
    Bitacora.findAll({
        where: {
            companyName: req.body.companyName
        }
    })
            .then(projects => {
                // projects will be an array of all Project instances
                res.json({projects})
              }  
    )
    .catch(err => {
        res.send('error: ' + err)
    })

})


bitacora.get("/getAll", (req,res) => {
    Bitacora.findAll()
            .then(projects => {
                // projects will be an array of all Project instances
                res.json({projects})
              }  
    )
    .catch(err => {
        res.send('error: ' + err)
    })

})


module.exports = bitacora