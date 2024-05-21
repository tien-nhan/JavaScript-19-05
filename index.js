//* Yêu cầu câu số 1
function timNhoNhatWhile() {
    var n = 1;
    var tong = 0;
    while (tong <= 10000) {
        tong = tong + n;
        n = n + 1;
    }
    return n - 1;
}
document.getElementById("ketqua1-while").innerHTML = timNhoNhatWhile();


function timNhoNhatDoWhile() {
    var n = 1;
    var tong = 0;
    do {
        tong = tong + n;
        n = n + 1;
    } while (tong <= 10000);
    return n - 1;
}
document.getElementById("ketqua1-dowhile").innerHTML = timNhoNhatDoWhile();


function timNhoNhatFor() {
    var tong = 0;
    for (var n = 1; tong <= 10000; n = n + 1) {
        tong = tong + n;
    }
    return n - 1;
}
document.getElementById("ketqua1-for").innerHTML = timNhoNhatFor();


//* Yêu cầu câu số 2
function sumWhile(x, n) {
    var sum = 0;
    var conSo = 1;
    var numX = x;
    while (conSo <= n) {
        sum = sum + numX;
        numX = numX * x;
        conSo = conSo + 1;
    }
    return sum;
}


function sumDoWhile(x, n) {
    var sum = 0;
    var conSo = 1;
    var numX = x;
    do {
        sum = sum + numX;
        numX = numX * x;
        conSo = conSo + 1;
    } while (conSo <= n);
    return sum;
}

function sumFor(x, n) {
    var sum = 0;
    var numX = x;
    for (var conSo = 1; conSo <= n; conSo = conSo + 1) {
        sum = sum + numX;
        numX = numX * x;
    }
    return sum;
}

function handleSum() {
    var x = document.getElementById("xGiatri").value;
    var n = document.getElementById("nGiatri").value;

    x = Number(x);
    n = Number(n);

    var ketQuaWhile = sumWhile(x, n);
    var ketQuaDoWhile = sumDoWhile(x, n);
    var ketQuaFor = sumFor(x, n);

    document.getElementById("ketqua2-while").innerHTML = ketQuaWhile;
    document.getElementById("ketqua2-dowhile").innerHTML = ketQuaDoWhile;
    document.getElementById("ketqua2-for").innerHTML = ketQuaFor;
}


//* Yêu cầu câu số 3
function giaiThuaWhile(n) {
    var giaiThua = 1;
    var conSo = 1;
    while (conSo <= n) {
        giaiThua = giaiThua * conSo;
        conSo = conSo + 1;
    }
    return giaiThua;
}

function giaiThuaDoWhile(n) {
    var giaiThua = 1;
    var conSo = 1;
    do {
        giaiThua = giaiThua * conSo;
        conSo = conSo + 1;
    } while (conSo <= n);
    return giaiThua;
}

function giaiThuaFor(n) {
    var giaiThua = 1;
    for (var conSo = 1; conSo <= n; conSo = conSo + 1) {
        giaiThua = giaiThua * conSo;
    }
    return giaiThua;
}

function handleGiaiThua() {
    var n = document.getElementById("giaiThuaInput").value;


    n = Number(n);

    var ketQuaWhileBa = giaiThuaWhile(n);
    var ketQuaDoWhileBa = giaiThuaDoWhile(n);
    var ketQuaForBa = giaiThuaFor(n);

    document.getElementById("ketqua3-while").innerHTML = ketQuaWhileBa;
    document.getElementById("ketqua3-dowhile").innerHTML = ketQuaDoWhileBa;
    document.getElementById("ketqua3-for").innerHTML = ketQuaForBa;
}



//* Yêu cầu câu số 4
function taoDivWhile() {
    var container = document.getElementById('divContainer');
    var content = "";
    var conSo = 1;
    while (conSo <= 10) {
        var color;
        if (conSo % 2 === 0) {
            color = 'background-color: red;';
        } else {
            color = 'background-color: blue;';
        }
        content += '<div style="' + color + '">Div ' + conSo + '</div>';
        conSo = conSo + 1;
    }
    container.innerHTML = content;
}

function taoDivDoWhile() {
    var container = document.getElementById('divContainer');
    var content = "";
    var conSo = 1;
    do {
        var color;
        if (conSo % 2 === 0) {
            color = 'background-color: red;';
        } else {
            color = 'background-color: blue;';
        }
        content += '<div style="' + color + '">Div ' + conSo + '</div>';
        conSo = conSo + 1;
    } while (conSo <= 10);
    container.innerHTML = content;
}

function taoDivFor() {
    var container = document.getElementById('divContainer');
    var content = "";
    for (var conSo = 1; conSo <= 10; conSo = conSo + 1) {
        var color;
        if (conSo % 2 === 0) {
            color = 'background-color: red;';
        } else {
            color = 'background-color: blue;';
        }
        content += '<div style="' + color + '">Div ' + conSo + '</div>';
    }
    container.innerHTML = content;
}
