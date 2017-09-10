const express = require('express');
const hbs=require('hbs');
var app=express();
hbs.registerPartials(__dirname+"/views/partials");
const port=process.env.PORT||3000;
app.set("view engiine",'hbs');
app.use(express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
  // res.send("<h1>hello express!!!!</h1>")
//  res.send({
//    name:"kiran",
//    likes:[
//       'foot',
//       'crick'
//
//    ]
// });

res.render('home.hbs',{
   mes:"myt hhooooooooooome",
    pagetitle:"my page dynamic",
    year:new Date().getFullYear()

});
});

app.get('/about',(req,res)=>{

res.render('about.hbs',{
    pagetitle:"my page dynamic",
    year:new Date().getFullYear()

});

});


app.get('/error',(req,res)=>{

  // res.send(",<h1>eroor le mangya<h1>");
res.send({
     error:"error le mangya",
     status:"not bad"
});
});
app.listen(port,()=>{
 console.log(`port number is ${port}`)

});
