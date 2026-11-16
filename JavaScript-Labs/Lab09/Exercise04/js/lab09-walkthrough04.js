/* Exercise 9.4 - Simple event handling */

// Bước 2, 5, 6: handler cho nút Hide/Show (phiên bản cuối có CSS transition)
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        // đổi display sau 1000 ms
        setTimeout(function () {
            content.style.display = "none";
        }, 1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";
        // đổi class sau 500 ms
        setTimeout(function () {
            content.className = "makeItNormal";
        }, 500);
    }
}

var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);

// Bước 3: đổi style ảnh khi rê chuột vào
var img = document.getElementById("mainImage");
img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});

// Bước 4: bỏ style khi chuột rời khỏi ảnh
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});
