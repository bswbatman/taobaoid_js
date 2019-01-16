!function () {
    "use strict";
    var i, x;
    var meta_a = document.getElementsByTagName('a');
    //console.log(meta_a[0].href)
    for (i = 0; i < meta_a.length; i++) {
        x = meta_a[i];
        console.log(x.href);
    }
}();


!function () {
    "use strict";
    var i, x;
    var meta_a = document.getElementsByTagName('a');
    //console.log(meta_a[0].href)
    for (i = 0; i < meta_a.length; i++) {
        x = meta_a[i];
        var idurl = x.href.indexOf('https://h5.m.taobao.com/awp/core/detail.htm?id=')
        if (idurl === -1) {
            continue
        }
        console.log(x.href);
    }
}();


!function () {
    "use strict";
    var i, x;
    var meta_a = document.getElementsByTagName('a');
    //console.log(meta_a[0].href)
    for (i = 0; i < meta_a.length; i++) {
        x = meta_a[i];
        var idurl = x.href.indexOf('https://h5.m.taobao.com/awp/core/detail.htm?id=')
        if (idurl === -1) {
            continue
        }
        console.log(x.href.split('id=')[1]);
    }
}();


!function () {
    "use strict";
    var length = 3;
    for (let p = 0; p < length; p += 1) {
        var i, x;
        var idArr = [];
        var meta_a = document.getElementsByTagName('a');
        //console.log(meta_a[0].href)
        for (i = 0; i < meta_a.length; i++) {
            x = meta_a[i];
            var idurl = x.href.indexOf('https://h5.m.taobao.com/awp/core/detail.htm?id=')
            if (idurl === -1) {
                continue
            }
            //console.log(x.href.split('id=')[1]);
            idArr.push(x.href.split('id=')[1])
        }
        if (p === 0) {
            sessionStorage.setItem('id', idArr);
        } else {
            let n = sessionStorage.getItem('id');
            n = n.concat(idArr);
            sessionStorage.setItem('id', n);
        }
        setTimeout("document.querySelectorAll(\'#gl-pagenav a\')[1].click();", 4000);
        //document.querySelectorAll('#gl-pagenav a')[1].click();

    }
}();

!function () {
    "use strict";
    var length = 3;
    for (let p = 0; p < length; p += 1) {
        setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;", 5400);

        var i, x;
        var idArr = [];
        var meta_a = document.getElementsByTagName('a');
        //console.log(meta_a[0].href)
        for (i = 0; i < meta_a.length; i++) {
            x = meta_a[i];
            var idurl = x.href.indexOf('https://h5.m.taobao.com/awp/core/detail.htm?id=')
            if (idurl === -1) {
                continue
            }
            //console.log(x.href.split('id=')[1]);
            idArr.push(x.href.split('id=')[1])
            if (p === 0) {
                sessionStorage.setItem('id', idArr);
            } else {
                let n = sessionStorage.getItem('id');
                n = n.concat(idArr);
                sessionStorage.setItem('id', n);
            }
        }
        setTimeout("document.querySelectorAll(\'#gl-pagenav a\')[1].click();", 5600);
        //document.querySelectorAll('#gl-pagenav a')[1].click();
    }
}();