const { response } = require("express");
const express = require ("express");
const path = require("path");
const app= express();
const hbs=require("hbs");
const port = 3000;
const Connectiondb = require("./db/conn.js");



const static_path= path.join(__dirname,"../public");
const template_path= path.join(__dirname,"../templates/views");
const partial_path= path.join(__dirname,"../templates/partials");


app.use(express.static(static_path));
app.set('views', template_path);


app.set('view engine','hbs');
hbs.registerPartials(partial_path);


app.get('/', (request,response)=>{
     response.render('index');
})

app.get('/about', (req, res) =>{
     // res.send('<h1> This is about page</h1>');
     res.render('about');
})

app.listen(port,()=>{
     console.log("listening at port 3000");     
})
