/**
 * Created by rostifar on 10/22/16.
 */
CodeBreaker.Preload = function(game){};

CodeBreaker.Preload.prototype = {

    preload: function() {
        this.load.image('background', 'assets/space.jpg');
        this.load.image('1button', 'assets/1.png');
        this.load.image('2button', 'assets/2.png');
        this.load.image('eliz', 'assets/eliz.jpg');
        this.load.audio('airhorn', 'assets/airhorn.mp3');
    },

    update: function() {
        this.state.start('Game');
    }
};