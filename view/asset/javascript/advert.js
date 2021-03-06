function getAdvertList ( adv_status ) {
    var url = '/advert/list/selAdvertList';
    var self = {};
    self.adv_status = ( adv_status || null );

    reqXHttp('POST', url, self, function ( result ) {
        try {
            result = JSON.parse(result);
        } catch (e) {
            alert("Check Input Data!");
            return;
        }

        if ( result.code == 1000 ) {
            var adv_tbody = ( document.getElementById('adv_tbody') || null );
            var data = result.data || [];

            if ( adv_tbody == null ) {
                alert("[Error]: Check Object Status");
                return;
            }

            var record = null;
            for (var rows = 0; rows < data.length; rows++) {
                record = data[rows];
                adv_tbody.innerHTML += "<tr>"
                                        + "<td>" + record['adv_idx']                 + "</td>"
                                        + "<td>" + record['adv_owner']               + "</td>"
                                        + "<td>" + record['email']                   + "</td>"
                                        + "<td>" + record['adv_desc']                + "</td>"
                                        + "<td>" + record['adv_link']                + "</td>"
                                        + "<td>" + record['adv_status']              + "</td>"
                                        + "<td>" + dateFormat(record['adv_created']) + "</td>"
                                        + "<td>" + dateFormat(record['adv_updated']) + "</td>"
                                        + "<td>" + dateFormat(record['adv_exposed']) + "</td>"
                                        + "<td>" + record['gender_code']             + "</td>"
                                        + "<td>" + record['age_code']                + "</td>"
                                    + "</tr>"
                ;
            }
        } else {
            alert('[Error]:' + result.code);
        }
        return;
    });
}
function addAdvert () {
    var url = '/advert/regist/add';
    var self = {};
    self.adv_owner  = ( document.getElementById('adv_owner')  || {} ).value || null;
    self.email      = ( document.getElementById('email')      || {} ).value || null;
    self.adv_desc   = ( document.getElementById('adv_desc')   || {} ).value || null;
    self.adv_link   = ( document.getElementById('adv_link')   || {} ).value || null;
    self.tgt_gender = ( document.getElementById('tgt_gender') || {} ).value || null;
    self.tgt_age    = ( document.getElementById('tgt_age')    || {} ).value || null;

    if ( self.adv_owner == null || isByteLength(self.adv_owner, 64) == false ) {
        alert("Check Advertiser");
        return;
    }
    if ( self.email == null || isByteLength(self.email, 64) == false ) {
        alert("Check Email");
        return;
    }
    if ( self.adv_desc == null || isByteLength(self.adv_desc, 128) == false ) {
        alert("Check Advertising slogan");
        return;
    }
    if ( self.adv_link == null || isByteLength(self.adv_link, 512) == false ) {
        alert("Check Advertising Link");
        return;
    }
    if ( self.tgt_gender == null || isByteLength(self.tgt_gender, 64) == false ) {
        alert("Check Gender");
        return;
    }
    if ( self.tgt_age == null || isByteLength(self.tgt_age, 64) == false ) {
        alert("Check Age");
        return;
    }
    reqXHttp('POST', url, self, function ( result ) {
        try {
            result = JSON.parse(result);
        } catch (e) {
            alert("Check Input Data!");
            return;
        }

        if ( result.code == 1000 ) {
            location.href = '/';
        } else {
            alert('[Error]:' + result.code);
        }
        return;
    });
}
function getTargetList () {
    var url        = '/advert/regist/selTargetList';
    var tgt_gender = ( document.getElementById('tgt_gender') || null );
    var tgt_age    = ( document.getElementById('tgt_age')    || null );

    reqXHttp('POST', url, {}, function ( result ) {
        try {
            result = JSON.parse(result);
        } catch (e) {
            alert("Check Input Data!");
            return;
        }

        if ( tgt_gender == null || tgt_age == null ) {
            console.log("[Error]: Check Object Status");
            return;
        }
        if ( result != null && result.code == '1000' && result.data != null ) {
            var record = null;
            for ( var rows = 0; rows < result.data.length; rows++ ) {
                record = result.data[rows];
                tgl_class = record['tgl_class'];
                tgl_code  = record['tgl_code'];
                tgl_desc  = record['tgl_desc'];

                if ( record.tgl_class == 'G' ) {
                    tgt_gender.innerHTML += '<option value="' + tgl_code + '">'
                                                + tgl_desc
                                         + ' </option>'
                    ;
                } else
                if ( record.tgl_class == 'A') {
                    tgt_age.innerHTML    += '<option value="' + tgl_code + '">'
                                                + tgl_desc
                                         + ' </option>'
                    ;
                }
            }
        } else {
            alert('[Error]:' + result.code);
            return;
        }
        return;
    });
}
