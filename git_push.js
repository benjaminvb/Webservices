var push = require('get-push');

push('./app', 'http://github.com/example/example.github.io', function() {
  console.log('Done!');
});