class Wallet {
    constructor(money) {
        let _money = money;
        this.getWalletValue = () => _money; // zawartosc portfela

        this.checkCanPlay = (value) => { // czy uzytkownik ma wystarczajaca ilosc srockow
            if (_money >= value) return true;
            return false;
        }

        this.changeWallet = (value, type = "+") => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === "+") {
                    return _money += value
                } else if (type === '-') {
                    return _money -= value;
                } else {
                    throw new Error("Nieprawidłowy typ działania");
                }
            } else {
                console.log(typeof value);
                throw new Error("Nieprawidłowa liczba");

            }
        };
    }

}