// var Twitter = require('twitter');

// console.log('twits view loaded');


// var client = new Twitter({
//   consumer_key: 'PdRlopSRCQkIkMCQpqPwkposr',
//   consumer_secret: 'yMRoCxm1NrrpmNqwaoGax7YukZGHK4uovCWtB0eI0OVuBjcCuQ',
//   access_token_key: '3642154820-Bi9fWYG3L6qHVJOK8d85OS0Rhq2ZvQc3Y9qgaqc',
//   access_token_secret: 'rt9gqJFVHhLvuIKJYYK1l4bPGS7ptrrlvWWdALZ20Mkcp'
// });

// App.Views.Twits = Backbone.View.extend({
//   el: "#twitter-view",
//   initialize: function () {
//     console.log("twit View created");
//     this.twitParty();

//   },
//   // app.get('/twitter', function (req, res) {
//   	params: {
//     q: 'pasta',
//     result_type: 'popular',
//     count: '99',
//     lang: 'en',
//     include_entities: false },
//   	twitParty: function(){
//     client.get('/search/tweets', this.params, function(error, tweets, raw){

//         console.log('twits thing works');
//         var globalTweets = tweets;
//         res.send(tweets.statuses);
//         console.log(tweets+'twits view data');
//     });
// }
// });