console.log('twitter view loaded');
App.Views.Twitters = Backbone.View.extend({
  el: "#twitter-view",
  initialize: function () {
    console.log("twitter collection View created");
    this.renderAll();
    // this.template = HandlebarsTemplates['user'];
    // this.template = HandlebarsTemplates[twitter];
    // this.listenTo(this.collection, 'reset', this.renderAll);
  },
  renderAll: function () {
    // render('twitter', this.collection);
    // var tweetDataRaw = this.collection;
    var tweetDataRaw = App.twitterCollection;
    var tweetStatuses = tweetDataRaw;
    // var sendDAta = JSON.parse(tweetDataRaw)
    // console.log(sendDAta.text)

    tweetDataRaw.each(function( cat ) {
    // console.log(cat );
});
    // console.log(tweetDataRaw.models.length);
    // console.log((tweetDataRaw.models[0].attributes.text) + ' twitter view statuses');
      for (i =0 ; i < tweetDataRaw.models.length ; i++ ){
        var twText = (tweetDataRaw.models[i].attributes.text);
        var twImg = tweetDataRaw.models[i].attributes.user.profile_image_url;
        var tweetDiv = '<div class="tweet"><img src='+twImg+'><br><p id="tweet-text">'+twText+'</p><p>Location: '+(tweetDataRaw.models[i].attributes.user.location || "Private")+'</p></div>';
        $('#twitter-view').append(tweetDiv);
        // console.log(twText);
        // console.log(tweetDataRaw.models.length);
      }
  }
});
