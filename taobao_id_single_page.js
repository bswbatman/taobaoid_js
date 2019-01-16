! function() {
    "use strict";
var i, x;
 var meta_a = document.getElementsByTagName('a');
 //console.log(meta_a[0].href)
for (i=0; i<meta_a.length; i++) {
    x = meta_a[i];
    console.log(x.href);
}
}();



! function() {
    "use strict";
var i, x;
 var meta_a = document.getElementsByTagName('a');
 //console.log(meta_a[0].href)
for (i=0; i<meta_a.length; i++) {
    x = meta_a[i];
	var idurl = x.href.indexOf('https://h5.m.taobao.com/awp/core/detail.htm?id=')
    if( idurl === -1){continue}
    console.log(x.href);
}
}();


! function() {
    "use strict";
var i, x;
 var meta_a = document.getElementsByTagName('a');
 //console.log(meta_a[0].href)
for (i=0; i<meta_a.length; i++) {
    x = meta_a[i];
	var idurl = x.href.indexOf('https://h5.m.taobao.com/awp/core/detail.htm?id=')
    if( idurl === -1){continue}
    console.log(x.href);
}
}();