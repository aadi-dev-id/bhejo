const mongoose=require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/Bhejo')
mongoose.connect('mongodb+srv://bhejomongodb:bhejomongodb@bhejo.8zvu6yy.mongodb.net/Bhejo')
.then(()=>console.log('connected'))
.catch((e)=>console.log("db error ",e))