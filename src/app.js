const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require('path')
const https = require("https")
const new_view_path = path.join(__dirname,"../templates/views")
const static_path = path.join(__dirname,"../public");
const partial_path = path.join(__dirname,"../templates/partials")
app.set('view engine','hbs')
app.set('views',new_view_path)
hbs.registerPartials(partial_path)
app.use(express.static(static_path))

app.get("/",function(req,res){
    res.render("index")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.listen(7300)  