/* Exercise 9.1 - Basic DOM selection */

// Bước 2: chọn textarea và gán value
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Bước 3: đổi nội dung tiêu đề
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";

// Bước 4: viết gọn, không dùng biến tạm
document.getElementById("pageTitle").innerHTML = "Even newer title";

// Bước 5: innerHTML trả về toàn bộ HTML bên trong
msg.value = document.getElementById("first").innerHTML;

// Bước 6: innerText trả về text đã bỏ thẻ
msg.value = document.getElementById("first").innerText;

// Bước 7: getAttribute
msg.value = "My class is " + msg.getAttribute("class");

// Bước 8: getElementsByTagName
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

// Bước 9: lấy tất cả <span> và thêm vào textarea
var i;
elem = document.getElementsByTagName("span");
for (i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value += "\n" + elem[i].innerText;
}

// Bước 10: getElementsByClassName
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value += "\n" + counts[i].innerText;
}

// Bước 11: querySelector (chỉ trả về phần tử đầu tiên khớp)
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;

// Bước 12: querySelectorAll (trả về tất cả phần tử khớp)
ps = document.querySelectorAll("#first p");
for (i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value += ps[i].innerHTML + "\n";
}

// Bước 13: setAttribute - ẩn textarea bằng class "hidden" của Bootstrap
document.getElementById("msgArea").setAttribute("class", "hidden");

// Bước 14: đổi màu nền của div#features
document.getElementById("features").style.backgroundColor = "green";
