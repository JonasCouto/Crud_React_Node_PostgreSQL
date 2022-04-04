const express = require('express');
const app = express();


// rodando servidor
app.listen(3001,()=>{
    console.log(" Rodando server ok ")
})


app.get('/', (req, res)=> {
    res.send('Hellow word');
})