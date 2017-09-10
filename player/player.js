var videoObj = $('#video');

function playM3u8(url){
  if(Hls.isSupported()) {
      var video = document.getElementById('video');
      video.volume = 0.3;
      var hls = new Hls();
      var m3u8Url = decodeURIComponent(url)
      hls.loadSource(m3u8Url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
      document.title = url
    }
}

function playPause() {
    videoObj.paused?videoObj.play():videoObj.pause();
}

function volumeUp() {
    videoObj.volume+=0.1;
}

function volumeDown() {
    videoObj.volume-=0.1;
}

function seek(sec) {
    videoObj.currentTime+=sec;
}

playM3u8(window.location.href.split("#")[1])
$(window).on('load', function () {
    $('#video').on('click', function(){this.paused?this.play():this.pause();});
    Mousetrap.bind('space', playPause);
    Mousetrap.bind('up', volumeUp);
    Mousetrap.bind('down', volumeDown);
    Mousetrap.bind('right', seek(5));
    Mousetrap.bind('left', seek(-5));
});
