const express = require("express") ;
const fs = require("fs");
const path = require("path") ;
const app = express() ;

const port = 300 ;

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')) ;//Serving Static File
app.use(express.urlencoded()) ;//to get post things

//PUG SPECIFIC STUFF
app.set('view engine', 'pug') ;//Set template engine as pug
app.set('views',path.join(__dirname,'Template')) ;//Set the View Directory

//END POINTS
app.get("/",(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely" ;
    const params ={title : "Form For GYM" ,content : con} ;
    res.status(200).render('index.pug',params) ;
})

app.post('/',(req,res)=>{
    //console.log(req.body) ;
     name = req.body.name ;
     age = req.body.age ;
     gender = req.body.gender ;
     address = req.body.address ;
     more = req.body.more ;
     db = `The name of the client is ${name} which is ${age} years old . Gender is ${gender} . Address : ${address} . More about him/her : ${more}` ;
    fs.writeFileSync('output.txt',db) ;
    const params = {'message' : "Your details are submitted."} ;
    res.status(100).render('index.pug',params) ;
})

//START THE SERVER
app.listen(port,()=>{
    console.log(`Server id running on' ${port}`) ;
})
