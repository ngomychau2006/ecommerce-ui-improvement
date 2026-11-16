/* Exercise 9.7 - Working with forms */

// Bước 2: đổi màu nền khi input được focus / mất focus
function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}

// Bước 3: gán handler sau khi trang tải xong
window.addEventListener("load", function () {
    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    for (var i = 0; i < fields.length; i++) {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});
