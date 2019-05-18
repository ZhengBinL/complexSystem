function play(rtspUrl, id) {
    var vlc = document.getElementById(id);
    var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
    var id = vlc.playlist.add(rtspUrl, "fancy name", options);
    vlc.playlist.playItem(id);
    vlc.playlist.play();
}