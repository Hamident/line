$(function(){
	$('head').append('<style type="text/css">body {display:none;}');
	$(window).load(function() {
		$("body").fadeIn(1000);
	});
});
google.load("feeds", "1");
 
function initialize() {
  var feedurl = "表示させるRSSフィードのURL";
  var feed = new google.feeds.Feed(feedurl);
  feed.load(dispfeed);
  function dispfeed(result){
    if (!result.error){
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
         htmlstr += "<p>" + entry.content + "</p>";
      }
       container.innerHTML = htmlstr;
    }else{
       alert(result.error.code + ":" + result.error.message);
    }
  }
}
google.setOnLoadCallback(initialize);