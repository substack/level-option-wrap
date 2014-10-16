var wrap = require('../');
var minimist = require('minimist');
var defined = require('defined');

var argv = minimist(process.argv.slice(2));
var opts = wrap(argv, {
    gt: function (x) { return [ 'post', defined(x, null) ] },
    lt: function (x) { return [ 'post', defined(x, undefined) ] }
});
console.log(opts);
