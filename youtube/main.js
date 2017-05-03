  $(document).ready(function() {
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  getVideoData();
  clickLoad();
});   
  

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var idVideo = '';

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // height: '390',
    // width: '640',
    videoId: idVideo,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

function loadVideo(videoID) {
  if(player) { player.loadVideoById(videoID); }
}

var currentID = 0;
function clickLoad(){
  $('.sub-area .sub-menu').click(function(){
    currentID = $(this).index();
    loadVideoData();
  });
}

function loadVideoData(){
  $.getJSON('data.json', function(jd) {
    console.log("success");
    $.each(jd, function(key, val){
      if(currentID == val.id){
        idVideo = val.videoID;
        console.log("ID: " + val.id);
        console.log("VideoID: " + val.videoID);
        loadVideo(idVideo);
      }
    });
  });
}

function getVideoData(){
  var listCount = $('.sub-menu').length;

  $.getJSON('data.json', function(jd) {
    console.log("success");
    idVideo = jd[0].videoID;
    console.log('Get Data Sucessful');

    for(var i = 1; i <= listCount; i++){ 
      $('.sub-menu:nth-child(' + i  + ') .sub--menu-item > img').attr('src', jd[i-1].imageURL);
      console.log('Get Image url ' + i + ': ' + jd[i-1].imageURL);
      // alert("Get Image url " + i + ' ' + 'http://img.youtube.com/vi/' + jd[i].videoID + '/0.jpg');
    }
  });
}