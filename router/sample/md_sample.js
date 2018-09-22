/*
    author     : bak chulhyong
    created    : 2018 - 09 - 22
    modified   : 2018 - 09 - 22
    description: sample functions
*/
const fs = require('fs');

const EQUIP = require('../../common/equip.js');
const LOG   = require('../../common/log.js');
// DIR
const HTML_DIR  = EQUIP.getHtmlDir();

module.exports.FC_LIST = {
    "default": getSample,
}
// main page
function getSample ( req, res ) {
    var dir = HTML_DIR + 'sample/index.html';

    EQUIP.writePage(dir, 'text/html', res);
    return;
}
