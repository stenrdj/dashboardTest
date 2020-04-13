
const express = require('express');
const port = 80;
const app = express();
const cors = require('cors');

 // Serve static assets normally
app.use(express.static(__dirname ));
// Cors bypass
app.use(cors());
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  res.header('Access-Control-Allow-Methods', "*");
  next();
}
app.use(allowCrossDomain);
 

app.get('/api/cards', function (request, response) {

       let jsonObj = require('../public/json/cards.json');
       response.json(jsonObj);
 });

app.get('/api/campaigns', function (request, response) {
  
       let jsonObj = require('../public/json/campaigns.json');
       response.json(jsonObj);
 });
 
app.listen(port, () => {
  console.log('HTTP Server running on port 80');
});
 