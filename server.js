var express = require('express'),

    
    request = require('request'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars')
    app = express();
// var misc = require('./public/javascripts/twitterConnect.js');

app.use(bodyParser.urlencoded({extended: false}));
var Twitter = require('twitter');
app.use(express.static('public'));
app.listen(3000);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var queryString = '';
var instagramData ='';

app.get('/', function (req, res) {
    res.render('home');
});



app.post('/query', function (req, res) {
     queryString = req.body.query;
    // var lng = req.param("lng");
    
    console.dir(req.body.query+' post stuff!!!!!!!!!!!!!!');
    res.send(req.body.query)
    // console.log(queryString+'  post logging')
});

app.get('/query', function (req, res) {

res.send(req.body.query)    
});


//Twitter API/////////////////////////////////////////////////////////////

var client = new Twitter({
  consumer_key: 'PdRlopSRCQkIkMCQpqPwkposr',
  consumer_secret: 'yMRoCxm1NrrpmNqwaoGax7YukZGHK4uovCWtB0eI0OVuBjcCuQ',
  access_token_key: '3642154820-Bi9fWYG3L6qHVJOK8d85OS0Rhq2ZvQc3Y9qgaqc',
  access_token_secret: 'rt9gqJFVHhLvuIKJYYK1l4bPGS7ptrrlvWWdALZ20Mkcp'
});

// var jqueryInput = $('#lookup').val();
// console.log(jqueryInput+'jqueryInput here');


app.get('/twitter', function (req, res) {
    var query = '%23'+queryString;

    // console.log('server query again '+ query +' is the the query')
    var globalTweets = '';
    var params = {
    q: query,
    result_type: 'mixed',
    count: 48,
    lang: 'en'
    };

    client.get('/search/tweets', params, function(error, tweets, raw){
        var globalTweets = tweets;
        res.send(tweets.statuses);

        // console.log('server js query object'+query);

        
  });
}

);
app.post('/instagram', function (req, res){
  instagramData = req.body.instaData;
  res.send(instagramData);

})
app.get('/instagram', function  (req, res){
  res.send(instagramData);
});

