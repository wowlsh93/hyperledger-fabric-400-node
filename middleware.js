
const { Worker } = require('worker_threads');


class Fabric {

    constructor() {
        this.count = 0
    }

    start () {
        this.endorser = new Worker(__dirname + '/endorser.js');
        this.endorser.on('error', (err) => { throw err })
        this.endorser.on('message', this.callback)
    }

    start_transaction(key, value) {
        this.endorser.postMessage('proposal')
    }

    callback (data) {
       //console.info(data)
    }

}

module.exports = {
    fabric : Fabric
};


