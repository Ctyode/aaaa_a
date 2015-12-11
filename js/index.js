window.onload = function() {
    (function(player) {
        document.getElementById("button_play").addEventListener("click", function() {
            player.play();
        });
        document.getElementById("button_pause").addEventListener("click", function() {
            player.pause();
        });
        document.getElementById("button_volume_increase").addEventListener("click", function() {
            if(player.volume < 1) {
                player.volume += 0.1;
            }
        });
        document.getElementById("button_volume_decrease").addEventListener("click", function() {
            if(player.volume > 0) {
                if(player.volume > 0.1) {
                    player.volume -= 0.1;
                } else {
                    player.volume = 0.0;
                }
            }
        });
    })(document.getElementById("player"));
};