

App.Collections.Urbans = Backbone.Collection.extend({
  url:'/urban',
  initialize: function(){
  this.urbanData();

console.log('urban collection loaded');
  },
  urbanData: function() {
	$('#lookup').css('display', 'none');
	$('#search-button').css('display', 'none');
  var urbData = '';
	var lookupData = $('#lookup').val();
	console.log(lookupData);
	var output = $.ajax({
		url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term='+lookupData+"'",
		type: 'GET',
		data: {}, // Additional parameters here
		dataType: 'json',
		success: function(data) {

      console.log(data);
      console.log('urban data above');
      var urban = $('#urban-data');
      var urbData = data.list;
        $('#urban-data').text('Top 3 Definitions From Urban Dictionary:');

        
//WORKSSSS
        for (i = 0; i < 3 ; i ++){
          var urbCount = i +1;
          var urbDef = data.list[i].definition;
          var urbEx = urbData[i].example;
          var urbLink = urbData[i].permalink;
          var urbThumbsUp = urbData[i].thumbs_up;
          var urbThumbsDown = urbData[i].thumbs_down;
        var urbDiv = '<div class ="urbDiv"><a href='+urbLink+' target="_blank"></a><div class = "urb-def">Definition #'+urbCount+' :'+urbDef+'</div><br><div>Example: '+urbEx+'</div><br><div>Thumbs Up: '+urbThumbsUp+' Thumbs Down: '+urbThumbsDown+'</div></div>';
        urban.append(urbDiv);
        }
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "GpZsElmsXHmshUcjesZhcdmdwvlpp1E2aPWjsn2qP7SCVsEDAk"); // Enter here your Mashape key
//     // instaData();
     }
  });
},

  model: App.Models.Urban
});