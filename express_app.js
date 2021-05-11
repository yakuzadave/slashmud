const express = require('express')

var app = express();
var port = process.env.PORT || 3000;
// body parser middleware

//app.use(bodyParser.urlencoded({ extended: true }));
// handler mapping

//app.post("/inhook", inHandler);
//app.post("/outhook", outHandler);
//app.post("/slack/commands/roll", roll);
app.get('/', function(req,res){
  
  console.log(req.body)
  if(req.query.challenge == 'undefined'){
    res.send(req.query)
  }
  else{
    res.send('Success')
  }
  
})
