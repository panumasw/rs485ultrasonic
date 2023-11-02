const { SerialPort } = require('serialport')

const port = new SerialPort({
    path: '/dev/ttyUSB0',
    baudRate: 9600,
})

let data = [0x04, 0x03, 0x01, 0x01, 0x00, 0x01, 0xD4, 0x63]


