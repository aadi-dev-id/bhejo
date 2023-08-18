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
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send("Hello");
});

app.post('/login', async (req,res)=>{
    try{
        // console.log(req.body);
        const username = req.body.username;
        const password = req.body.password;
        const result = await userRegister.findOne({email:username});
        if(result?.email){
            const isMatch= await bcryptjs.compare(password,result.password)
            console.log("match",isMatch);
            if(isMatch){
                const token=await result.generateAuthToken();
                res.json({token:token}); 
            }else{
                res.json({error:"Invalid Password!"});
            }
        }else{
            res.json({error:"User not registered!"});
        }
    }catch(error){
        res.json({error:error});
    }
})
app.post('/register',async (req,res)=>{
    try {
        const result = await userRegister.findOne({email:req.body.username}).select({email:1}).sort({_id:-1});
        if(!result){
            const userReg = new userRegister({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                fullname : req.body.firstname+" "+req.body.lastname,
                email : req.body.username,
                mobile : req.body.mobile,
                password : await bcryptjs.hash(req.body.password,10)
            });
            // const token= await userReg.generateAuthToken();
            // res.cookie('jwt',token,{
            //     expires:new Date(Date.now()+30000),
            //     httpOnly:true
            // });
            const registerresult = await userReg.save();
            res.json(registerresult);
        }else{
            res.json({error:"Email already exists!"});
        }
    } catch (error) {
        console.log(error);
    }
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
}); 