/**
 * Created by rostifar on 10/22/16.
 */
CodeBreaker.GGame = function(game) {};

CodeBreaker.GGame.prototype = {

    create: function() {
        var that = this;
        var text = this.game.add.text(game.world.centerX, 30, "Select A Number",
            {font: "30px Arial", fill: "#eeeeee", stroke: "#535353", strokeThickness: 15});
        text.anchor.setTo(0.5, 0.5);
        var button1 = game.add.button(game.world.centerX, 200, '1button', function () {
            var buttonNum = 1;
            text.visible = false;
            that.guess(buttonNum);
        });
        button1.anchor.setTo(0.5, 0.5);
        var button2 = game.add.button(game.world.centerX, 500, '2button', function () {
            var buttonNum = 2;
            that.guess(buttonNum);
            text.visible = false;
        });
        button2.anchor.setTo(0.5, 0.5);
    },

    guess: function(num) {
        var guess = Math.floor(Math.random() * 2) + 1;
        if (guess == num) {
            var text = this.game.add.text(game.world.centerX, 30, "Select Another Number",
                {font: "30px Arial", fill: "#eeeeee", stroke: "#535353", strokeThickness: 15});
            text.anchor.setTo(0.5, 0.5);
        } else {
            this.endGame();
        }
    },

    endGame:function () {
        game.state.start('EndGame');
    }
};
