
const { parentPort } = require('worker_threads')

parentPort.on('message', (msg) => {
    if (msg === 'proposal') {
        parentPort.postMessage('rwset')
        return
    }
    throw new Error(`Unknown message: ${msg}`)
})

