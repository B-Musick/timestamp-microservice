// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
require('dotenv').config;

app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => { res.sendFile(__dirname + '/views/index.html'); });

// your first API endpoint... 
app.get("/api/hello", (req, res) => { res.json({greeting: 'hello API'}); });

// Timestamp with no date given, current date is returned
app.get("/api/timestamp",(req,res)=>{
  let date = new Date();
  res.json({"unix":date.getTime(),"utc":date.toUTCString()});
});

app.get("/api/timestamp/:date_string",
    (req,res)=>{
      let date;
      // This should be false for both
      let noletters = /[a-z]/.test(req.params.date_string);

      if((new Date(req.params.date_string)).getTime() && !noletters){
        // If the date_string makes a valid date
        date = new Date(req.params.date_string);
        res.json({"unix":date.getTime(),"utc":date.toUTCString()});
      } else if ((new Date(parseInt(req.params.date_string)) && !noletters)){
        // If it is an integer passed
        console.log(parseInt(req.params.date_string))
         date = new Date(parseInt(req.params.date_string));
         res.json({"unix":date.getTime(),"utc":date.toUTCString()});
      }
      // If none of the above work then error
      else res.json({"error":"Invalid Date"});
    }
)

// listen for requests 
var listener = app.listen(3000, ()=> {
  console.log('Your app is listening on port ' + listener.address().port);
});