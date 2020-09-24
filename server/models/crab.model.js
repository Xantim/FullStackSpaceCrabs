const mongoose = require("mongoose");

const CrabSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"a crab needs a name"],
        minlength:[2, "name must be at least 2 chars"],
    },
    spaceShip:{
        type: String,
        required:[true,"a crab needs a spaceship"],
        minlength:[6, "name must be at least 6 chars"],
    },
    weaponOne:{
        type:String,
        default:""
    },
    weaponTwo:{
        type:String,
        default:""
    },
    weaponThree:{
        type:String,
        default:""
    },
    
}, {timestamps:true})

const Crab = mongoose.model("Crab",CrabSchema);

module.exports = Crab;

