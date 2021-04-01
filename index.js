const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('<h1>Welcome to dhirajapp</h1>')
});

app.listen(3000, ()=>{
    console.log("server running on port 3000");
})