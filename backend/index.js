const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require('dotenv').config();
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
require('./src/db/conn.js');
const app = express();
const userRegister = require('./src/models/users.js')
const auth=require('./src/middleware/auth.js');
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with the actual origin of your frontend app
    credentials: true, // Allow cookies and credentials
  };


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

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
            if(isMatch){
                const token = await result.generateAuthToken();
                res.cookie("jwtoken",token,{
                    expires:new Date(Date.now() + 25892000000),
                    httpOnly:true
                });
                res.json({token:token,onboarded:result.onboarded}); 
            }else{
                res.status(400).json({error:"Invalid Password!"});
            }
        }else{
            res.status(400).json({error:"User not registered!"});
        }
    }catch(error){
        res.status(400).json({error:error});
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

app.get('/checkLogin',auth,(req,res)=>{
    res.json({status:true,userId:req.userId});
})

app.post('/onboarding',auth, async (req,res)=>{
    try{
        const userId = req.userId;
        const companyDetails = {
            companyName : req.body.companyName,
            companyType : req.body.companyType,
            user_is : req.body.user_is,
            onboarded : true
        }
        userRegister.findOneAndUpdate({ _id: userId }, companyDetails, { new: true })
        .then((data )=>{
            if(data){
                res.json("Onboarding successFully done!");
            }else{
                res.status(400).json({error:"Failed to onboard user"});
            }
        }).catch(error=>{
            throw new Error(error);
        });

    }catch(error){
        res.status(400).json({error:error});
    }
})








app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`);
}); 