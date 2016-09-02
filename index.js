var addon =  require('bindings')('node_zstd.node');

module.exports.compress = addon.Compress;
module.exports.decompress = addon.Decompress;
module.exports.compressUsingDict = addon.CompressUsingDict;
module.exports.compressUsingCDict = addon.CompressUsingCDict;
module.exports.decompressUsingDict = addon.DecompressUsingDict;
module.exports.decompressUsingCDict = addon.DecompressUsingCDict;
