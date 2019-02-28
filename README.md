# m3u8-player
M3U8 Player in browser. Play any live stream m3u8 link with this webapp at https://bharadwajpro.github.io/m3u8-player

I created this website because VLC is unstable in playing live streams. It buffers a lot.

If you want to extract m3u8 files from live streams. You can use `youtube-dl -F <video-url>` to display all formats available
and then type `youtube-dl -f <itag> -g <video-url>` for the direct link. Paste it in the website mentioned above and play it.
If it doesn't work, then raise an issue.
  
If you want live streams legally then visit this repo - https://github.com/notanewbie/LegalStream

This website is tested on Google Chrome and Firefox desktop web browsers. Not tested on android and iOS. Raise an issue if it doesn't work.
## Keyboard shortcuts
* `up` and `down` - Volume
* `left` and `right` - Seek by 5 secs
* `f` - Full screen
## Known issues
* The page is served over `https`. So if the stream url is not `https` but `http`, the browser may throw a warning. Make sure you ignore that visible at the top right of the address bar on Google Chrome.
