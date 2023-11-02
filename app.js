const { SerialPort } = require('serialport')
const { ByteLengthParser } = require('@serialport/parser-byte-length')

const port = new SerialPort({
    path: '/dev/ttyUSB0',
    baudRate: 9600,
})

let data = [0x04, 0x03, 0x01, 0x01, 0x00, 0x01, 0xD4, 0x63]

const parser = port.pipe(new ByteLengthParser({ length: 7 }))
parser.on('data', (val)=> {
    console.log(val)
    let vals = 256*parseInt(val[3])+parseInt(val[4])
    console.log(vals)
}) // will have 8 bytes per data event


setInterval(() => {
    port.write(data, (err)=> {
        console.log(err)
    })
}, 5000);