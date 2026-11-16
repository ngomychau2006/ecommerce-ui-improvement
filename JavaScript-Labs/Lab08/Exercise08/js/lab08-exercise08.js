// define functions in this file

// Bước 8: biến toàn cục (global scope)
var boxClass = 'movingDiv';

// Bước 1-6: hàm trả về chuỗi HTML của một div, có tham số num
function outputBox(num) {
    // Bước 10: nếu bỏ "var" ở đây, box sẽ trở thành biến toàn cục (dễ gây lỗi)
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}
