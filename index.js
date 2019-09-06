const express = require("express");

const port = 3000;

const app = express();

const body_parser = require("body-parser");

app.use(body_parser.urlencoded({extended: true}));

app.get("/",function(req,res){
    let html = "";
    html += '<div className = "container"> <div className = "row">  <div className = "form-group" >  <input type = "text" className = "form-control" name = "valor"/>  </div>   </div>';
    res.end(html);
});


app.listen(port,function(){
    console.log("Hola desde el puerto: "+port)
});