var defined = require('defined');

module.exports = function (opts, prefix) {
    if (!opts) opts = {};
    var xopts = {};
    var gte = defined(prefix.gte, prefix.ge, prefix.start);
    var lte = defined(prefix.lte, prefix.le, prefix.end);
    
    if (prefix.gt) {
        if (defined(opts.gte, opts.ge) !== undefined) {
            xopts.gte = prefix.gt(defined(opts.gte, opts.ge));
        }
        else xopts.gt = prefix.gt(opts.gt);
    }
    else if (gte) {
        if (defined(opts.gte, opts.ge) !== undefined) {
            xopts.gte = gte(defined(opts.gte, opts.ge));
        }
        else xopts.gt = gte(opts.gt);
    }
    
    if (prefix.lt) {
        if (defined(opts.lte, opts.le) !== undefined) {
            xopts.lte = prefix.lt(defined(opts.lte, opts.le));
        }
        else xopts.lt = prefix.lt(opts.lt);
    }
    else if (lte) {
        if (defined(opts.lte, opts.le) !== undefined) {
            xopts.lte = lte(defined(opts.lte, opts.le));
        }
        else xopts.lt = lte(opts.lt);
    }
    
    return xopts;
};
