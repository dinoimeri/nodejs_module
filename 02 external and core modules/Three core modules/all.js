const os = require('os');

// os funkcija 1
os.cpus().forEach((cpu) => {
    console.log(cpu);
});

// os funkcija 2
var platform = os.platform();

// os funkcija 3
var freeMemory = os.freemem();



const fs = require('fs');

// fs funkcija 1
fs.writeFileSync('os_spec.txt', "The platform is: " + platform + ', it has a free memory of: ' + freeMemory);

// fs funkcija 2
var readMe = fs.readFileSync('os_spec.txt', 'utf8');

console.log(readMe); 

// fs funkcija 3
fs.unlink('deleteMe.txt');



// // events module
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
console.log('A scream is detected!');
});
eventEmitter.emit('scream');