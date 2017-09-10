var video = document.getElementById('video');

function playM3u8(url){
  if(Hls.isSupported()) {
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
    video.paused?video.play():video.pause();
}

function volumeUp() {
    video.volume+=0.1;
}

function volumeDown() {
    video.volume-=0.1;
}

function seekRight() {
    video.currentTime+=5;
}

function seekLeft() {
    video.currentTime-=5;
}

playM3u8(window.location.href.split("#")[1])
$(window).on('load', function () {
    $('#video').on('click', function(){this.paused?this.play():this.pause();});
    Mousetrap.bind('space', playPause);
    Mousetrap.bind('up', volumeUp);
    Mousetrap.bind('down', volumeDown);
    Mousetrap.bind('right', seekRight);
    Mousetrap.bind('left', seekLeft);
});
