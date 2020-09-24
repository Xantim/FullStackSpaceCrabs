const Crabs = require("../models/crab.model");

module.exports = {
    index:(req,res) => {
        Crabs.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    create:(req,res) => {
        Crabs.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    show:(req,res) => {
        Crabs.findOne({_id:req.params.id})
        .then(data => res.json({results:data}))
        .catch(err => res.json(err.errors))
    },
    update:(req,res) => {
        Crabs.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, useFindAndModify:false})
        .then(data => res.json({results:data}) )
        .catch(err => res.json(err.errors))
    },
    destroy:(req,res) => {
        Crabs.deleteOne({_id:req.params.id})
        .then(data => res.json({results:data}))
        .catch(err => res.json(err.errors))    
    }

}