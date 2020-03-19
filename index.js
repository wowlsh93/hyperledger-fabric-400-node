
var middleware = require('./middleware');
var Stopwatch = require("node-stopwatch").Stopwatch;

function main(){

    console.info("start-1");

    const fab = new middleware.fabric();
    fab.start()
    var stopwatch = Stopwatch.create();
    stopwatch.start();
    for (var i = 0; i < 100 ; i++){

        fab.start_transaction(i.toString(),i.toString());

    }

    console.log("milliseconds: " + stopwatch.elapsedMilliseconds);
    stopwatch.stop();

    console.info("start-2");

}


main()
