const express = require("express");
// const session = require('express-session');
const cors = require("cors");
const cookieParser = require("cookie-parser");
require('dotenv').config();
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
require('./src/db/conn.js');
const app = express();
const userRegister = require('./src/models/users.js')
const messages = require('./src/models/messages.js')
const auth=require('./src/middleware/auth.js');
// const allowedOrigins = ['https://bhejo-px3z.vercel.app'];
const corsOptions = {
    origin: true, 
    credentials: true, // Allow cookies and credentials
  };

app.use(cookieParser());
app.use('*',cors(corsOptions));
// // Configure express-session middleware
// app.use(session({
//     secret: process.env.SESSION_KEY, // This should be a long, random string, used to sign the session ID cookie.
//     resave: false,            // Don't save the session to the store unless it's modified.
//     saveUninitialized: true,  // Save new, uninitialized sessions.
//     cookie: {
//       secure: false, // Set this to true if you're using HTTPS
//       httpOnly: true, // Set this to true for security
//       sameSite : 'none'
//     },
//   }));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


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
            const token = await userReg.generateAuthToken();
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });
            const registerresult = await userReg.save();
            res.json(registerresult);
        }else{
            res.json({error:"Email already exists!"});
        }
    } catch (error) {
        console.log(error);
    }
})

app.post('/checkLogin',auth,(req,res)=>{
    console.log("HEllo");
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

app.post('/webhooks', async(req, res) => {
    if (req.query['hub.mode'] == 'subscribe' && req.query['hub.verify_token'] == process.env.WEBHOOKTOKEN) {
      res.send(req.query['hub.challenge']);
    } else {
      try {
        const wData = req.body;
        if(wData.object=='whatsapp_business_account'){
            const to = wData.entry[0].changes[0].value.metadata.display_phone_number;
            const from = wData.entry[0].changes[0].value.messages[0].from;
            let msg = "Un-supported Incoming Message";
            if(wData.entry[0].changes[0].value.messages[0].type=='text'){
                msg = wData.entry[0].changes[0].value.messages[0].text.body;
            }
            const log = "INCOMING";
            let tonum = +to;
            let fromnum = +from;
            const cid = tonum+fromnum;
            const message = new messages({
                to : to,
                from : from,
                cid : cid,
                msg : msg,
                log : log
            });
            const msgRes = await message.save();
            res.sendStatus(200);
        }else{
            res.sendStatus(401);
        }
      } catch (error) {
        res.sendStatus(500);
      }
    }
})

app.post('/getConversation',auth,async(req,res)=>{
    try {
        const userId = req.userId;
        const result = await messages.find().select({from:1}).sort({_id:-1});
        const uniqueFromNumbers = [...new Set(result.map(result => result.from))];
        let conversation = [];
        let fromnum = "";
        if(uniqueFromNumbers.length > 0){
            fromnum = uniqueFromNumbers[0];
            conversation = await messages.find({from:fromnum});
        }
        res.json({contacts : uniqueFromNumbers,conversation:conversation,fromnum:fromnum});
    } catch (error) {
        res.status(400).json({error:error});
    }
})




app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`);
}); 