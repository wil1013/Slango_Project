
console.log('app loaded');

var App = {
  Models: {},
  Collections: {},
  Views: {}
};


$(function(){
  
  App.queryTerm = '';

// TWITTER
  App.twitterCollection = new App.Collections.Twitters();
  App.getTweets = function(query){
    
    var queryTerm = $('#lookup').val().split(' ').join('');
    App.queryTerm = queryTerm.toUpperCase()
    $('#query-term').html('results for: #'+App.queryTerm);
    $.post("/query",{query: queryTerm});

    App.twitterCollection.fetch({
      reset: true,
      success: function(twitData){
      App.twitterView = new App.Views.Twitters({collection: twitData});
      // console.log('app.gettweets fired');
      
      
      }
    });
  };


 // INSTAGRAM works
  App.getInstas = function(){
    new App.Collections.Instas()
    $('#search-wrapper').empty();
    // $.post("/instagram",{instaData: 'yellooooooooooo'});
  };
  App.instagramView = new App.Views.Instas({collection: 'cat'});


  App.urbanCollection = function(){
    
    new App.Collections.Urbans();
    console.log('app.urbancollection fired in appjs');
  };
  App.urbanView = new App.Views.Urbans(App.Collections.Urbans);
  
  // App.collection = new App.Collections.Batmans();
  // App.batmansView = new App.Views.Batmans({collection: App.collection});
  
  // App.collection.fetch({reset: true});

$('#lookup').keydown(function(e) {
    if (e.keyCode == 13) {
        App.getTweets();
        App.urbanCollection();
        App.getInstas();
        App.Views.Urbans.render;
    }
});


});