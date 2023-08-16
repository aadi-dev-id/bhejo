const express = require("express");
const cors = require("cors");
require('dotenv').config();
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
require('./src/db/conn.js');
const app = express();
const port = 3000;
const userRegister = require('./src/models/users.js')

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello");
});


app.post('/register',async (req,res)=>{
    try {
        const userReg = new userRegister({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            fullname : req.body.firstname+" "+req.body.lastname,
            email : req.body.username,
            mobile : req.body.mobile,
            password : await bcryptjs.hash(req.body.password,10)
        });

        
        const token= await userReg.generateAuthToken();
        res.cookie('jwt',token,{
            expires:new Date(Date.now()+30000),
            httpOnly:true
        });
        console.log(token);
        const registerresult = await userReg.save();
        return registerresult;
    } catch (error) {
        console.log(error);
    }
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
}); 