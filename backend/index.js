const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello");
});
app.post('/register',(req,res)=>{
    // console.log("ReQ",req);
    res.json(req.body);
    console.log(req);
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
}); 