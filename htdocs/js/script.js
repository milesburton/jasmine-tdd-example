var Register = function(){

    var self = this;

    var coins = [2,1,.5,.2,.1];

    self.getCoins = function(){

        return coins;
    };

    self.getCoinCount = function(){

        return {
            2:0,
            1:0,
            .5:0,
            .2:0,
            .1:0};
    };

    self.getCoinValueInPence = function(coin){

        return coin * 100;
    };

    self.getLargestCoinLessThanOrEqualTo = function(denominationInPence){

        for(var coinIndex = 0; coinIndex < coins.length; coinIndex++){

            var coin = coins[coinIndex];
            var valueInPence = self.getCoinValueInPence(coin);

            if(valueInPence<=denominationInPence) {

                return coin;
            }
        }

        throw new Error("Unmatched coin");
    };
};

var CoinManager = function(){

    var self = this;

    var register = new Register();

    self.getLeastCoinsFor = function(denominationInPence){

        var coinCount = register.getCoinCount();

        while(denominationInPence>0){

            var coin = register.getLargestCoinLessThanOrEqualTo(denominationInPence);
            denominationInPence -= register.getCoinValueInPence(coin);
            coinCount[coin] == null ? 1 : coinCount[coin]++;
        }

        return coinCount;
    };
};

var ChangeFormatter = function(){

    var self = this;
    var register = new Register();

    function coinToString(coin){

        if(coin<1){
            coin = register.getCoinValueInPence(coin) + "p";
        }else{
            coin = "£" + coin;
        }

        return coin;
    }

    self.toString = function(coinCount){

        var response = "";
        var coins = register.getCoins();

        var values = [];

        for(var coinIndex = 0; coinIndex < coins.length; coinIndex++){

            var coin = coins[coinIndex];
            var coinString = coinToString(coin);
            var count = coinCount[coin];

            if(count){
                values.push(count + "x" + coinString);
            }
        }

        return values.join(", ");
    };
};

