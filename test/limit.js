var wrap = require('../');
var test = require('tape');
var defined = require('defined');

test('limit option', function (t) {
    t.plan(1);
    var params = {
        gt: 'sub',
        lt: 'sub\uffff',
        limit: 100
    };
    var opts = wrap(params, {
        gte: function (x) { return [ 'post', defined(x, null) ] },
        lte: function (x) { return [ 'post', defined(x, undefined) ] }
    });
    t.deepEqual(opts, {
        gt: [ 'post', 'sub' ],
        lt: [ 'post', 'sub\uffff' ],
        limit: 100
    });
});

test('limit fn', function (t) {
    t.plan(1);
    var params = {
        gt: 'sub',
        lt: 'sub\uffff',
        limit: 100
    };
    var opts = wrap(params, {
        gte: function (x) { return [ 'post', defined(x, null) ] },
        lte: function (x) { return [ 'post', defined(x, undefined) ] },
        limit: function (x) { return x * 2 }
    });
    t.deepEqual(opts, {
        gt: [ 'post', 'sub' ],
        lt: [ 'post', 'sub\uffff' ],
        limit: 200
    });
});
