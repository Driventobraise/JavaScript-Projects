function displayType(game) {
    var gameType = game.getAttribute("data-game-type");
    alert(gameType + " is a game by " + game.innerHTML);
}