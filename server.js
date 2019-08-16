// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
     
/*else if(new Date(parseInt(req.params.date_string))){
      let date = new Date(parseInt(req.params.date_string));
      res.json({"unix":date.getTime(),"utc":date.toUTCString()})
    }*/

app.get("/api/timestamp/:date_string",
        
//     (req,res)=>{
//       if(req.params.date_string){
//         // If the date_string makes a valid date
        
//       }
//       else{
//         res.json({"error":"Invalid Date"})
//       }
//     },
   (req,res)=>{
      let date = new Date(req.params.date_string);
      res.send(date.toUTCString());
      }
//       let dateString = req.params.date_string;
//       let splitDate = dateString.split('-');
//       let numDateArray = splitDate.map(val=>parseInt(val));
      
//     let date;

//       date = new Date(...numDateArray);
    
  
  
    
    // res.json({"unix":date.getTime(),"utc":date.toUTCString()});
)



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});