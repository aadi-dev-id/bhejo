const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    fullname : String,
    email : String,
    mobile : String,
    password : String,
    tokens : [{token:String}]
})



userSchema.methods.generateAuthToken=async function(){
    try{
        const token=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
        // console.log("JWT hhh",this);
        this.tokens=this.tokens.concat({token:token})
        await this.save()
        return token
    }
    catch(e){
        console.log(e);
        return e;
    }
}

// userSchema.pre('save',async(next)=>{

//     console.log("Password1",this);
//     // this.password= await bcryptjs.hash(this.password,10);
//     // next();
// });

const userRegister = new mongoose.model('users',userSchema);
module.exports = userRegister
