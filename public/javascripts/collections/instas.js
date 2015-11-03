
console.log('instagram collection loaded')
App.Collections.Instas = Backbone.Collection.extend({
  url: '/instagram',
 initialize: function () {
  	// INSTAGRAM 
	console.log('instagram collection initialized');
	this.instaData();

  // this.timeConverter();
},



 instaData: function(){
	var instagramDiv = $('#instagram-data');
	instagramDiv.empty();
	var lookupDataJoin = $('#lookup').val().split(' ').join('');
	var instaOutput = $.ajax({
    url: 'https://api.instagram.com/v1/tags/'+lookupDataJoin+'/media/recent?count=100&access_token=2202689102.5b9e1e6.615e5c2fb18243d2893405721857597c&callback=?',
    type: 'GET',
    data:{},
    dataType:'json',
    success: function(data){
      
      for (i = 0 ; i <= data.data.length ; i ++){
      var instaIndex = data.data[i];
      var instaPic = instaIndex.images.standard_resolution.url;
      var instaText = instaIndex.caption.text;
      var instaLikes = instaIndex.likes.count;
      var instaDate = 'date'//this.timeConverter(instaIndex.created_time);
      var instaLink = instaIndex.link
      var instaUser = instaIndex.user.username;
      var instaUserIMG = instaIndex.user.profile_picture;
      var instaIMG = '<div class = "insta" ><a href='+instaLink+' target="_blank"></a><img class="instagram-user" src ='+instaUserIMG+'><div id="insta-name">'+instaUser+'</div><br><img class="instagram-img" src='+instaPic+'><br><div id="insta-likes">Likes: '+instaLikes+'</div><div id="instagram-text"><p>'+instaText+'</p></div><br></div>';
      
      instagramDiv.append(instaIMG);
      }
	}
	});
  },
timeConverter: function(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + ' ' + date + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  console.log('time converter fired')
  return time;  
  },
  model: App.Models.Insta
});