const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors')
const FRONTEND_URL = process.env.FRONTEND_URL;
const app = express();

app.use(express.json());


var corsOptions = {
    origin: [FRONTEND_URL,'http://example.com'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))

require('dotenv').config()
app.use(express.urlencoded({extended:false}));
//route

//FETCH THE MONGO_URL VARIABLE FROM THE ENV FILE
const MONGO_URL = process.env.MONGO_URL; 
const PORT = process.env.PORT || 3000;



app.use('/api/products',productRoute);
app.get('/',(req,res) => {
    throw new Error('fake error');
     res.send('Hello from the node code');
})
app.use(errorMiddleware);


mongoose.
connect(MONGO_URL)
.then(()=>{
    console.log('connected to the database');
    app.listen(PORT, ()=> {
       
        console.log(`Node app is running on port ${PORT}`);
        });

 
}).catch((error)=>{
    console.log(error);
})

// this is old one..
//mongodb+srv://root:admin123@cluster0.rmvgdim.mongodb.net/Node-API?retryWrites=true&w=majority


// this is new one
// mongodb+srv://root:<password>@node-api.8x9mpq1.mongodb.net/?retryWrites=true&w=majority



// app.get('/blog',(req,res) =>{
//     res.send('Hello from Blog');
// });

// app.get('/about',(req,res) =>{
//     res.send('Hello from about Page');
// });