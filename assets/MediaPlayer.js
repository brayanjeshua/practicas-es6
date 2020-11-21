function  MediaPlayer(config) {
this.media = config.el;
}

MediaPlayer.prototype.play = function() {
this.media.play();
};

export default MediaPlayer;