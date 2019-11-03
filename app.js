var log = require('./javascripts/Log');
var msg = require('./javascripts/Messages');
var data = require('./javascripts/Data');
var fs = require('fs');

var dat = fs.readFileSync('./TestFile.txt', 'utf8');

console.log(dat);

log.Info(msg.purpose);
log.Warning(data.firstName + ' ' + data.lastName);
log.Error(msg.simpleGreeting);
