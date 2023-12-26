const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('Subscribe', () => {
    console.log('Thanks for subscribing to College Wallah.');
});
emitter.emit('Subscribe', "College Wallah");

// OUTPUT: Thanks for subscribing to College Wallah.