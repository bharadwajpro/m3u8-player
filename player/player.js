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

playM3u8(window.location.href.split("#")[1])
$('#video').click(function(){this.paused?this.play():this.pause();});
