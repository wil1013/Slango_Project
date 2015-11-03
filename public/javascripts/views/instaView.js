console.log('instagram view loaded');
App.Views.Instas = Backbone.View.extend({
  el: '#instagrammer',
  initialize: function () {
    console.log('instagram view created');
    // this.render();
  },
  render: function () {
    console.log('instagram render fired');
  }
});