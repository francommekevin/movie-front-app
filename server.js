//Install express server
import {environment} from 'src/environments/environment';

const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/movie-front-app'));
console.log(process.env.BASE_URL);
console.log(process.env.BASE_URL2);

app.get('/*', function(req,res) {
  environment.BASE_API_URL = process.env.BASE_URL;
  res.sendFile(path.join(__dirname+'/dist/movie-front-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log('Listening on localhost:8080');
