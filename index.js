var array = [];
var arrayDuong = [];
var arrayTangDan = [];
var arraySoThuc = [];
var arrayTangDan = [];
function hoanDoi() { //   => CÂU 6 :
    var vitri1 = +document.getElementById('hoanDoi1').value;
    var vitri2 = +document.getElementById('hoanDoi2').value;
    var temp = 0;
    temp = array[vitri1];
    array[vitri1] = array[vitri2];
    array[vitri2] = temp;
    document.getElementById('hoanDoi').innerHTML = 'Array sau khi hoán đổi =  [' + array + ']';
}
// function sxTangDan() { // => CÂU 7 :
//     // CAU 7 :
//     var temp1 = 0;
//     for (let i = 0; i < arrayTangDan.length; i++) {
//         if (arrayTangDan[i] > arrayTangDan[i + 1]) {
//             temp1 = arrayTangDan[i];
//             arrayTangDan[i] = arrayTangDan[i + 1];
//             arrayTangDan[i + 1] = temp1;
//         }
//     }
//     document.getElementById('tangDan').innerHTML = 'Array tăng dần =  [' + arrayTangDan + ']';
// }
function isPrime(n) { //  => CÂU 8 :
    let flag = 1;
    let y = 2;
    if (n < 2) {
        flag = 0;
        return;
    }
    while (y < n) {
        if (n % y === 0) {
            flag = 0;
            break;
        }
        y++;
    }
    return flag;
}

function bttuan18() {
    var mangNhaptay = +document.getElementById('mangNhaptay').value;
    var mangThuc = +document.getElementById('mangThuc').value;
    var sum = 0;
    var countDuong = 0, countAm = 0;
    array.push(mangNhaptay);
    arraySoThuc.push(mangThuc);
    arrayTangDan.push(mangNhaptay);
    var min = array[0];
    var minDuong = arrayDuong[0];
    var chan = 0;
    var j = 0;
    // CÂU 1 :
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
            // CÂU 2 : 
            countDuong++;
            arrayDuong[j] = array[i];
        }
        else {
            countAm++;
        }
        // CÂU 3 :
        if (min > array[i + 1])
            min = array[i + 1];
        // CÂU 4 : bị lỗi undefined ghi nhập ở số đầu và bị lỗi báo k có số dương
        for (let k = 0; k < arrayDuong.length; k++) {
            if (arrayDuong == '')
                minDuong = 'Không có số dương trong mảng';
            else {
                if (minDuong > arrayDuong[k + 1])
                    minDuong = arrayDuong[k + 1];
            }
        }
        // CÂU 5 :
        if (array[i] % 2 === 0)
            chan = array[i];
        else {
            chan = -1;
        }
        // CAU 7 :
        var temp1 = 0;
        for (let i = 0; i < arrayTangDan.length; i++) {
            if (arrayTangDan[i] > arrayTangDan[i + 1]) {
                temp1 = arrayTangDan[i];
                arrayTangDan[i] = arrayTangDan[i + 1];
                arrayTangDan[i + 1] = temp1;
            }
        }
        //  CÂU 8 :
        var snt;
        for (let i = 0; i < array.length; i++) {
            if (isPrime(array[i]) == 1) {
                snt = array[i];
                break;
            }
            else {
                snt = -1;
            }
        }
        //  CÂU 9 : Lỗi ghi nhập mảng thực mà k nhập mảng trước đó 
        var countSoNguyen = 0;
        for (let x = 0; x < arraySoThuc.length; x++) {
            if (Number.isInteger(arraySoThuc[x]))
                countSoNguyen++;
        }
        //  CÂU 10 :
        var amountAmDuong = '';
        if (countDuong > countAm)
            amountAmDuong = 'Số dương > Số âm';
        else if (countDuong < countAm)
            amountAmDuong = 'Số dương < Số âm';
        else {
            amountAmDuong = 'Số dương = Số âm';
        }
        j++;
    }

    var arrClassName = document.getElementsByClassName('txt');
    document.getElementById('mangTay').innerHTML = 'Array =  [' + array + ']';
    document.getElementById('mangSoThuc').innerHTML = 'Array số thực =  [' + arraySoThuc + ']';
    document.getElementById('tongSoDuong').innerHTML = 'Tổng các số dương : ' + sum;
    document.getElementById('demSoDuong').innerHTML = 'Đếm các số dương : ' + countDuong;
    document.getElementById('timMin').innerHTML = 'Số nhỏ nhất trong mảng : ' + min;
    document.getElementById('timDuongNhoNhat').innerHTML = 'Số dương nhỏ nhất trong mảng : ' + minDuong;
    document.getElementById('timSoChan').innerHTML = 'Số chẵn cuối cùng trong mảng : ' + chan;
    // document.getElementById('hoanDoi').innerHTML = 'ArrayHoanDoi =  [' + array + ']';
    document.getElementById('tangDan').innerHTML = 'Array tăng dần =  [' + arrayTangDan + ']';
    document.getElementById('SNT').innerHTML = 'Số nguyên tố đầu tiên trong mảng : ' + snt;
    document.getElementById('soNguyen').innerHTML = 'Có bao nhiêu số nguyên trong mảng số thực : ' + countSoNguyen;
    document.getElementById('soSanhAmDuong').innerHTML = amountAmDuong;
    for (let j = 0; j < arrClassName.length; j++) {
        arrClassName[j].style.display = 'block';
    }

}




