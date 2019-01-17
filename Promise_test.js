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
var i = 0;
var timee = 5000
var meta_a = document.getElementsByTagName('a');

function clicks() {
    return new Promise(function (resolve, reject) {
        //log('乘法运行---' + input + ' + ' + input + '...');
        setTimeout("document.querySelectorAll('#gl-pagenav a')[1].click();", 12000*i+7000);
    });
}

function loog() {
    return new Promise(function (resolve, reject) {
        //log('乘法运行---' + input + ' + ' + input + '...');
        setTimeout("console.log('ddddddddd')", 500);
    });
}

function huadong() {
        return new Promise(function (resolve, reject) {
        //log('乘法运行---' + input + ' + ' + input + '...');
        setTimeout("document.querySelectorAll('#gl-pagenav a')[1].click();", 12000*i+7000);
    });
}

!function () {
    for (i=0;i<=5;i++) {
        var p = new Promise(function (resolve, reject) {
            setTimeout("document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;",12000*i+5000);
            //document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
            resolve();
        }).then(clicks)
    }
}();


