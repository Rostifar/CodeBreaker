/**
 * Created by rostifar on 10/22/16.
 */
var CodeBreaker = {};
CodeBreaker.Boot = function(game) {};

CodeBreaker.Boot.prototype = {
    create: function () {
        this.game.stage.backgroundColor = '#659EC7';
        this.state.start('Preload');
    }
};