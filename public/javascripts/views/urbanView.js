console.log('urban view loaded')
App.Views.Urbans = Backbone.View.extend({
  el: '#search-glass',
  initialize: function () {
    console.log('urban view created')
    this.template = Handlebars.compile($("#urban-temp").html())
    
  },
  events: {
	'click #search-glass': 'render'
	},
  render: function () {
  	console.log('urban view collection render fired = ');
    this.$el.html(this.template(this.collection[0].definition));
  }
})