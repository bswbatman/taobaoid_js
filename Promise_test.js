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
        setTimeout(make_id, 12000 * i + 6000)
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

function saveid() {
    sessionStorage.setItem('id', idArr);
    // sessionStorage.getItem('id')
}

function alrttr() {
    return new Promise(function (resolve, reject) {
        setTimeout("console.log(idArr)", 12000 * i + 8000)
        setTimeout(saveid, 12000 * i + 9000)
        resolve();
    });
}


!function () {
    var p = new Promise(function (resolve, reject) {
        resolve();
    })
        .then(huadong).then(get_id).then(clicks)
        .then(huadong).then(get_id).then(clicks)
        .then(huadong).then(get_id).then(clicks)
        .then(huadong).then(get_id).then(clicks)
        .then(huadong).then(get_id).then(clicks)
        .then(huadong).then(get_id).then(clicks)
        .then(huadong).then(get_id).then(clicks).then(get_id).then(alrttr)
}();