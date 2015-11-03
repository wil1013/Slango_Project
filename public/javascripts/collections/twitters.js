console.log('twitters collection loaded')
App.Collections.Twitters = Backbone.Collection.extend({
  url:'/twitter',
  initialize: function(){
  	console.log('twitter collection created')
  	// console.log(this.collection);
  },
  model: App.Models.Twitter
});