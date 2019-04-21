class Draw {
    constructor() {
        this.options = ['red', 'blue', 'green'];
        let _resut = this.drawResult();
        this.getDrawResult = () => _resut;
    }

    drawResult() {
        let colors = [];

        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            colors.push(color);
        }


        return colors;
    }
}