module.exports = function (opts, prefix) {
    if (!opts) opts = {};
    var xopts = {};
    
    if (defined(opts.gte, opts.ge) !== undefined) {
        xopts.gte = prefix.gt(defined(opts.gte, opts.ge));
    }
    else xopts.gt = prefix.gt(opts.gt);
    
    if (defined(opts.lte, opts.le) !== undefined) {
        xopts.lte = prefix.lt(defined(opts.lte, opts.le));
    }
    else xopts.lt = prefix.lt(opts.lt);
    
    return xopts;
};
