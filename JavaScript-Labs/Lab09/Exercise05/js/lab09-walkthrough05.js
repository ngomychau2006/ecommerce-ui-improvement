/* Exercise 9.5 - Responding to load events */

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Bước 4: chỉ chạy sau khi DOM đã tải xong.
   (Nếu gọi getElementById ngay ở đây, script nằm trong <head> sẽ chạy
   trước khi div1 tồn tại nên bị lỗi.) */
window.addEventListener("load", function () {
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});
