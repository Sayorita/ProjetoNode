const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Olá, mundo")
})

app.listen(8000, function(){
    console.log("Servidor rodando")
})
