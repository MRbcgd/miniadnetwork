/*
    author     : bak chulhyong
    created    : 2018 - 09 - 16
    modified   : 2018 - 09 - 16
    description: targetlist
*/
const MYSQL = require('./mysql.js');

// select
module.exports.selTargetList = function ( dbconn, owner ) {
    var sql = "SELECT TGL.tgl_code "
                 + ", TGL.tgl_class "
                 + ", TGL.tgl_desc "
              + "FROM tbATargetList TGL; "
    ;
    return MYSQL.executeQuery(dbconn, owner, sql);
}
// insert
module.exports.insTargetSet = function ( dbconn, owner, ctt_idx, adv_idx,
tgt_code, tgt_class ) {
    var sql = "INSERT "
              + "INTO tbATargetSet "
               + "SET ctt_idx = " + ctt_idx + " "
                 + ", adv_idx = " + adv_idx + " "
                 + ", tgl_idx =  ( "
                    + "SELECT tgl_idx "
                      + "FROM tbATargetList "
                     + "WHERE tgl_class = '" + tgt_class + "' "
                       + "AND tgl_code = '"  + tgt_code  + "' "
                 + "); "
    ;
    return MYSQL.executeQuery(dbconn, owner, sql);
}
