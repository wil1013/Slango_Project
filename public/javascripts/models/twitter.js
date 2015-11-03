console.log('twitter model loaded');

App.Models.Twitter = Backbone.Model.extend({
  initialize: function () {
    console.log('twitter model created')
    // console.log(this.model);
  }
});

// var Twitter = require('twitter');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Slingo'});
// });


 
// var client = new Twitter({
//   consumer_key: 'PdRlopSRCQkIkMCQpqPwkposr',
//   consumer_secret: 'yMRoCxm1NrrpmNqwaoGax7YukZGHK4uovCWtB0eI0OVuBjcCuQ',
//   access_token_key: '3642154820-Bi9fWYG3L6qHVJOK8d85OS0Rhq2ZvQc3Y9qgaqc',
//   access_token_secret: 'rt9gqJFVHhLvuIKJYYK1l4bPGS7ptrrlvWWdALZ20Mkcp'
// });



// var globalTweets = '';
// var params = {q: 'pizza', result_type: 'popular', count: 99, lang: 'en' };

// client.get('search/tweets', params, function(error, tweets, response){
//   if (!error) {
    
//     console.log(tweets);
//     globalTweets = tweets.statuses;
//   }
// });



