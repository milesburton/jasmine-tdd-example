describe("Coin test TDD example", function() {

    var coinManager = null;
    var register = null;

    beforeEach(function() {

        coinManager = new CoinManager();
        register = new Register();
    });

    describe("register tests", function(){

        it("get coin break down", function(){

          expect(register.getCoinCount()).toEqual(
              {2:0,
              1:0,
              .5:0,
              .2:0,
              .1:0});
        });

        it("get coin value in pence", function(){

          expect(register.getCoinValueInPence(2)).toBe(200);
        });


        it("get largest coin less than or equal to", function(){

            expect(register.getLargestCoinLessThanOrEqualTo(500)).toBe(2);
        });

        it("throws exception if denomination cannot be settled", function(){

           // expect(register.getNearestCoinLargerThan(505)).toThrow(new Error("Unmatched coin"));
        });

        it("get coins", function(){
           expect(register.getCoins()).toEqual( [2,1,.5,.2,.1]);
        });

    });

    describe("coin manager tests", function(){

        it("get least coins for 500", function() {

            expect(coinManager.getLeastCoinsFor(500)).toEqual(
                {2:2,
                1:1,
                .5:0,
                .2:0,
                .1:0});

        });

        it("get least coins for 550", function() {

            expect(coinManager.getLeastCoinsFor(550)).toEqual(
                {2:2,
                    1:1,
                    .5:1,
                    .2:0,
                    .1:0});

        });

    });

    describe("change formatter tests", function(){

        it("to String five pound fifty pence", function(){

            var fiveFifty = {
                2:2,
                1:1,
                .5:1,
                .2:0,
                .1:0};

            var coinResponse = new ChangeFormatter();

            expect(coinResponse.toString(fiveFifty)).toBe("2x£2, 1x£1, 1x50p");
        });

        it("to String 2 pound", function(){

            var twoPound = {
                2:2,
                1:0,
                .5:0,
                .2:0,
                .1:0};

            var coinResponse = new ChangeFormatter();

            expect(coinResponse.toString(twoPound)).toBe("2x£2");
        });

    });



});