'use strict';

const Agenda = require('agenda');
const agenda = new Agenda({db: {address: 'localhost:27017/ghub-tracker'}});

agenda.on( 'ready', function() {
  agenda.start()
  agenda.every('3 seconds', 'hello world');
});

agenda.define( 'hello world', function() {
  console.log('hello world');
});