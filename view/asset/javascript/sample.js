function getBanner ( ) {
    var ctt_key  = ( document.getElementById('ctt_key')  || {} );
    var art_kind = ( document.getElementById('art_kind') || {} );

    var url = 'https://miniadnetwork-core-staging.herokuapp.com/advert/htmlBanner/getBanner';
    var self = {};
    self.ctt_key  = ctt_key.value  || null ;
    self.art_kind = art_kind.value || null;

    if ( self.art_kind == null ) {
        alert("Check Banner Size");
        return;
    }
    if (  self.ctt_key == null || isByteLength(self.ctt_key, 64) == false ) {
        alert("Check Content Key");
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
            var sam_ban_akd1 = ( document.getElementById('sam_ban_akd1') || null );
            var data = result.data || '';

            if ( sam_ban_akd1 == null ) {
                alert("[Error]: Check Object Status");
                return;
            }

            sam_ban_akd1.innerHTML = data;
        } else {
            alert('[Error]:' + result.code);
        }
        return;
    });

}
