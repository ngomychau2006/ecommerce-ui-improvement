/* Exercise 8.7 - Arrays */

// Bước 2: tạo mảng các ngày trong tuần
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
// document.write(daysOfWeek + "<br>");

// Bước 3: thêm Sat vào cuối mảng
daysOfWeek.push("Sat");
// document.write(daysOfWeek + "<br/>");

// Bước 4: thêm Sun vào đầu mảng
daysOfWeek.unshift("Sun");
// Bước 5: đã comment lại dòng in mảng
// document.write(daysOfWeek + "<br/>");

// Bước 6-7: in hàng tiêu đề của bảng bằng vòng lặp
document.write("<table border=1>");
document.write("<tr>");
var day;
for (var i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";   // ngày dài hơn 3 ký tự (Tues, Thur) in nghiêng
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Bước 8: in các số từ 1 đến 30, giả sử tháng bắt đầu vào Chủ nhật (Sun)
var daysInMonth = 30;
document.write("<tr>");
for (var d = 1; d <= daysInMonth; d++) {
    document.write("<td>" + d + "</td>");
    // hết 7 ô thì xuống hàng mới (trừ ngày cuối cùng)
    if (d % 7 === 0 && d < daysInMonth) {
        document.write("</tr><tr>");
    }
}
document.write("</tr>");
document.write("</table>");
