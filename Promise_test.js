//https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345008539155e93fc16046d4bb7854943814c4f9dc2000
new Promise(function (resolve, reject) {
    log('开始...');
    var timeOut = Math.random() * 2;
    log('随机时间: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
            resolve('200 OK');
        }
        else {
            log('调用 reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut);
}).then(function (rp) {
    log('成功: ' + rp);
}).catch(function (reason) {
    log('失败: ' + reason);
});


function test() {
//console.log('test111111');
    setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;", 5000);
    setTimeout("document.querySelectorAll(\'#gl-pagenav a\')[1].click();", 10000);
}

!function () {
    test();
    //document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
}();


// text
// var i = 0;
// var timee = 5000
// var meta_a = document.getElementsByTagName('a');
//
// function clicks() {
//     return new Promise(function (resolve, reject) {
//         //log('乘法运行---' + input + ' + ' + input + '...');
//         setTimeout("document.querySelectorAll('#gl-pagenav a')[1].click();", 12000*i+7000);
//     });
// }
//
// function loog() {
//     return new Promise(function (resolve, reject) {
//         //log('乘法运行---' + input + ' + ' + input + '...');
//         setTimeout("console.log('ddddddddd')", 500);
//     });
// }
//
// function huadong() {
//         return new Promise(function (resolve, reject) {
//         //log('乘法运行---' + input + ' + ' + input + '...');
//         setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;", 12000*i+7000);
//     });
// }
//
// !function () {
//     for (i=0;i<=5;i++) {
//         var p = new Promise(function (resolve, reject) {
//             setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;",12000*i+5000);
//             //document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
//             resolve();
//         }).then(clicks)
//     }
// }();

//text - 2

// var i = 0;
// var timee = 5000
// var meta_a = document.getElementsByTagName('a');
//
// function clicks() {
//     return new Promise(function (resolve, reject) {
//         //log('乘法运行---' + input + ' + ' + input + '...');
//         setTimeout("document.querySelectorAll('#gl-pagenav a')[1].click();", 12000 * i + 7000);
//         i += 1
//     });
// }
//
// function huadong() {
//     return new Promise(function (resolve, reject) {
//         //log('乘法运行---' + input + ' + ' + input + '...');
//         setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;", 12000 * i + 5000);
//     });
// }
//
// !function () {
//     var p = new Promise(function (resolve, reject) {
//         //setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;",12000*i+5000);
//         //document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
//         resolve();
//     })
//         .then(huadong).then(clicks)
//         .then(huadong).then(clicks)
//         .then(huadong).then(clicks)
//         .then(huadong).then(clicks)
// }();


//finall
var i = 0;
var idArr = [];

function clicks() {
    return new Promise(function (resolve, reject) {
        console.log('点击前:' + i)
        setTimeout("document.querySelectorAll('#gl-pagenav a')[1].click();", 12000 * i + 7000);
        i += 1
        console.log('点击后:' + i)
        resolve();
    });
}

function huadong() {
    return new Promise(function (resolve, reject) {
        setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;", 12000 * i + 5000);
        console.log('huadong:' + i)
        resolve();
    });
}

function get_id() {
    return new Promise(function (resolve, reject) {
        setTimeout(make_id,12000*i + 6000)
        console.log('本页完成')
        resolve();
    });
}

function make_id() {
    var meta_a = document.getElementsByTagName('a');
    var j, x;
    for (j = 0; j <= meta_a.length; j++) {
        x = meta_a[j];

        var idurl = x.href.indexOf('https://h5.m.taobao.com/awp/core/detail.htm?id=')
        if (idurl === -1) {
            continue
        }
        console.log(x.href.split('id=')[1])
        idArr.push(x.href.split('id=')[1])
    }
}

!function () {
    var p = new Promise(function (resolve, reject) {
        resolve();
    })
        .then(huadong).then(get_id).then(clicks)
        .then(huadong).then(get_id).then(clicks)
        .then(huadong).then(get_id).then(clicks)
        .then(huadong).then(get_id).then(clicks).then(get_id)

}();