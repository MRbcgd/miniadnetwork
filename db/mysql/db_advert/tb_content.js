/*
    author     : bak chulhyong
    created    : 2018 - 09 - 16
    modified   : 2018 - 09 - 17
    description: content
*/
const MYSQL = require('./mysql.js');
const UUID  = require('../../../common/uuid.js');

// select
module.exports.selContent = function ( dbconn, owner, ctt_status ) {
    var sql = "SELECT ctt_idx "
                 + ", ctt_key "
                 + ", ctt_name "
                 + ", ctt_owner "
                 + ", email "
                 + ", ctt_status "
                 + ", ctt_created "
                 + ", ctt_updated "
                 + ", mini_point "
              + "FROM tbAContent "
            + "WHERE ctt_status = '" + ctt_status + "'; "
    ;
    return MYSQL.executeQuery(dbconn, owner, sql);
}
// insert
module.exports.insContent = function ( dbconn, owner, ctt_name,
    ctt_owner, email, ctt_status) {
    var sql = "INSERT "
              + "INTO tbAContent ( "
                    + "ctt_key "
                    + ", ctt_name "
                    + ", ctt_owner "
                    + ", email "
                    + ", ctt_status "
              + ") "
            + "VALUES ( "
                    + "'"  + UUID.generate64() + "' "
                    + ",'" + ctt_name          + "' "
                    + ",'" + ctt_owner         + "' "
                    + ",'" + email             + "' "
                    + ",'" + ctt_status        + "' "
            + ") "
    ;
    return MYSQL.executeQuery(dbconn, owner, sql);
}