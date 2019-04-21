class Statistics {
    constructor() {
        this.gameResutls = [];

    }
    addGameToStatisc(win, bid) {
        let gameResutl = {
            win,
            bid
        }
        this.gameResutls.push(gameResutl)
    }
    showGameStatistics() {
        let games = this.gameResutls.length;
        let wins = this.gameResutls.filter(result => result.win).length;
        let losses = this.gameResutls.filter(result => !result.win).length;
        return [games, wins, losses]
    }
}