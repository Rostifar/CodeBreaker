/**
 * Created by rostifar on 10/22/16.
 */
CodeBreaker.EndGame = function(game){};

CodeBreaker.EndGame.prototype = {

    create: function() {
        var audio = game.add.audio('airhorn');
        var eliz = game.add.sprite(game.world.centerX, game.world.centerY, 'eliz');
        eliz.anchor.setTo(0.5, 0.5);
        audio.play();
    }
};