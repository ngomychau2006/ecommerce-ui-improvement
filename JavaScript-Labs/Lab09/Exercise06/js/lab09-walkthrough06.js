/* Exercise 9.6 - Debugging events
   Dùng cùng trang với Exercise 9.5.
   Mở DevTools -> Sources (Chrome) / Debugger (Firefox), đặt breakpoint
   ở dòng alert(...) rồi rê chuột vào các ô div để quan sát biến e và e.target. */

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

// Bước 7
window.addEventListener("load", function () {
    var divs = document.querySelectorAll(".movingDiv");
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function (e) {
            alert("triggered by " + e.target.id);
        });
    }
});
