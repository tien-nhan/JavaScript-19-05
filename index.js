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
    var i = 1;
    var numX = x;
    while (i <= n) {
        sum = sum + numX;
        numX = numX * x;
        i = i + 1;
    }
    return sum;
}


function sumDoWhile(x, n) {
    var sum = 0;
    var i = 1;
    var numX = x;
    do {
        sum = sum + numX;
        numX = numX * x;
        i = i + 1;
    } while (i <= n);
    return sum;
}

function sumFor(x, n) {
    var sum = 0;
    var numX = x;
    for (var i = 1; i <= n; i = i + 1) {
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
    var i = 1;
    while (i <= n) {
        giaiThua = giaiThua * i;
        i = i + 1;
    }
    return giaiThua;
}

function giaiThuaDoWhile(n) {
    var giaiThua = 1;
    var i = 1;
    do {
        giaiThua = giaiThua * i;
        i = i + 1;
    } while (i <= n);
    return giaiThua;
}

function giaiThuaFor(n) {
    var giaiThua = 1;
    for (var i = 1; i <= n; i = i + 1) {
        giaiThua = giaiThua * i;
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
    var i = 1;
    while (i <= 10) {
        var color;
        if (i % 2 === 0) {
            color = 'background-color: red;';
        } else {
            color = 'background-color: blue;';
        }
        content += '<div style="' + color + '">Div ' + i + '</div>';
        i = i + 1;
    }
    container.innerHTML = content;
}

function taoDivDoWhile() {
    var container = document.getElementById('divContainer');
    var content = "";
    var i = 1;
    do {
        var color;
        if (i % 2 === 0) {
            color = 'background-color: red;';
        } else {
            color = 'background-color: blue;';
        }
        content += '<div style="' + color + '">Div ' + i + '</div>';
        i = i + 1;
    } while (i <= 10);
    container.innerHTML = content;
}

function taoDivFor() {
    var container = document.getElementById('divContainer');
    var content = "";
    for (var i = 1; i <= 10; i = i + 1) {
        var color;
        if (i % 2 === 0) {
            color = 'background-color: red;';
        } else {
            color = 'background-color: blue;';
        }
        content += '<div style="' + color + '">Div ' + i + '</div>';
    }
    container.innerHTML = content;
}



//* Yêu cầu câu số 5
function soNguyenTo(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i = i + 1) {
        if (num % i === 0) return false;
    }
    return true;
}

function inNguyenToWhile() {
    var output = document.getElementById('nguyenToOutput');
    var input = document.getElementById('nguyenToInput').value;
    var cacNguyenTo = '';
    var i = 1;
    while (i <= input) {
        if (soNguyenTo(i)) {
            cacNguyenTo += '<span>' + i + '</span>';
        }
        i = i + 1;
    }
    output.innerHTML = cacNguyenTo;
}

function inNguyenToDoWhile() {
    var output = document.getElementById('nguyenToOutput');
    var input = document.getElementById('nguyenToInput').value;
    var cacNguyenTo = '';
    var i = 1;
    do {
        if (soNguyenTo(i)) {
            cacNguyenTo += '<span>' + i + '</span>';
        }
        i = i + 1;
    } while (i <= input);
    output.innerHTML = cacNguyenTo;
}

function inNguyenToFor() {
    var output = document.getElementById('nguyenToOutput');
    var input = document.getElementById('nguyenToInput').value;
    var cacNguyenTo = '';
    for (var i = 1; i <= input; i = i + 1) {
        if (soNguyenTo(i)) {
            cacNguyenTo += '<span>' + i + '</span>';
        }
    }
    output.innerHTML = cacNguyenTo;
}