function play(rtspUrl, domId) {
    var vlc = document.getElementById(domId);
    var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
    var id = vlc.playlist.add(rtspUrl, "fancy name", options);
    vlc.playlist.playItem(id);
    vlc.playlist.play();
}