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


//先打印出来id，再进行存取
!function () {
    var length = 5;
    var idArr = [];
    for (let p = 0; p < length; p += 1) {
        setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;", 10000);

        var i, x;
        
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
//             if (p === 0) {
//                 sessionStorage.setItem('id', idArr);
//             } else {
//                 let n = sessionStorage.getItem('id');
//                 n = n.concat(idArr);
//                 sessionStorage.setItem('id', n);
//             }
        }
        setTimeout("document.querySelectorAll(\'#gl-pagenav a\')[1].click();", 10000);
        //document.querySelectorAll('#gl-pagenav a')[1].click();
    }
    console.log(idArr)
}();


//发现滚动无效
!function () {
    var length = 10;
    var idArr = [];
    for (let p = 0; p < length; p += 1) {
		alert("滚动到最下面"); 
        setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;", 10000);
        
        var i, x;
        
        var meta_a = document.getElementsByTagName('a');
        //console.log(meta_a[0].href)
        for (i = 0; i < meta_a.length; i++) {
            x = meta_a[i];
            
            var idurl = x.href.indexOf('https://h5.m.taobao.com/awp/core/detail.htm?id=')
console.log('click over')
            if (idurl === -1) {
                continue
            }
            //console.log(x.href.split('id=')[1]);
			console.log(x.href.split('id=')[1])
            idArr.push(x.href.split('id=')[1])
//             if (p === 0) {
//                 sessionStorage.setItem('id', idArr);
//             } else {
//                 let n = sessionStorage.getItem('id');
//                 n = n.concat(idArr);
//                 sessionStorage.setItem('id', n);
//             }
        }
		alert("点击下一页"); 
        setTimeout("document.querySelectorAll(\'#gl-pagenav a\')[1].click();", 10000);
        //document.querySelectorAll('#gl-pagenav a')[1].click();
    }
    console.log(idArr)
}();



!function () {
    var length = 10;
    var idArr = [];
    for (let p = 0; p < length; p += 1) {
		alert("滚动到最下面"); 
        //setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;", 10000);
        document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
        var i, x;
        
        var meta_a = document.getElementsByTagName('a');
        //console.log(meta_a[0].href)
        for (i = 0; i < meta_a.length; i++) {
            x = meta_a[i];
            
            var idurl = x.href.indexOf('https://h5.m.taobao.com/awp/core/detail.htm?id=')
console.log('click over')
            if (idurl === -1) {
                continue
            }
            //console.log(x.href.split('id=')[1]);
			console.log(x.href.split('id=')[1])
            idArr.push(x.href.split('id=')[1])
//             if (p === 0) {
//                 sessionStorage.setItem('id', idArr);
//             } else {
//                 let n = sessionStorage.getItem('id');
//                 n = n.concat(idArr);
//                 sessionStorage.setItem('id', n);
//             }
        }
		alert("点击下一页"); 
        //setTimeout("document.querySelectorAll(\'#gl-pagenav a\')[1].click();", 10000);
        document.querySelectorAll('#gl-pagenav a')[1].click();
    }
    console.log(idArr)
}();


!function () {
    var length = 2;
    var idArr = [];
    for (let p = 2; p <= length; p += 1) {
		alert("滚动到最下面"); 
        setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;", 5000);
		//setTimeout("console.log('滚动到下一页')",2000)
        //document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
		alert("滚动完成"); 
        var i, x;
        
        var meta_a = document.getElementsByTagName('a');
        //console.log(meta_a[0].href)
        for (i = 0; i <= meta_a.length; i++) {
            x = meta_a[i];
            
            var idurl = x.href.indexOf('https://h5.m.taobao.com/awp/core/detail.htm?id=')
console.log('click over')
            if (idurl === -1) {
                continue
            }
            //console.log(x.href.split('id=')[1]);
			console.log(x.href.split('id=')[1])
            idArr.push(x.href.split('id=')[1])
//             if (p === 0) {
//                 sessionStorage.setItem('id', idArr);
//             } else {
//                 let n = sessionStorage.getItem('id');
//                 n = n.concat(idArr);
//                 sessionStorage.setItem('id', n);
//             }
        }
		alert("点击下一页"); 
        setTimeout("document.querySelectorAll(\'#gl-pagenav a\')[1].click();", 10000);
        //document.querySelectorAll('#gl-pagenav a')[1].click();
		alert("点击完成"); 
    }
    console.log(idArr)
}();



new Promise(function (resolve, reject) {
    log('开始...');
    var timeOut = Math.random() * 2;
    log('随机时间: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('调用 resolve()...');
            resolve('200 OK');
        }
        else {
            log('调用 reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut );
}).then(function (r) {
    log('成功: ' + r);
}).catch(function (reason) {
    log('失败: ' + reason);
});
