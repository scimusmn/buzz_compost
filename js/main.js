//
// Return to the homepage when the video ends
//
videojs("example_video_1").ready(function(){
  this.on("ended", function(){
      window.location = "index.html?saver=false";
  });
});
