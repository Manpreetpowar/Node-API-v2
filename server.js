const express = require('express');
const app = express();

//route
app.get('/',(req,res) => {
    res.send('Hello from the node code');
})

app.listen(3000, ()=> {
console.log('Node app is running on port 3000');
});