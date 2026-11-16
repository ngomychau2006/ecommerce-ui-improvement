/* Exercise 10.3 - ADVANCED SELECTORS */

// Bước 2: chọn tất cả ô password và đổi màu nền thành vàng
// (Bước 3: đã comment lại theo yêu cầu của bài)
// $(':password').css('background-color', 'yellow');

// Bước 4: chọn mỗi phần tử con thứ 4 trong form và đổi màu nền
$('form :nth-child(4n)').css('background-color', 'yellow');

// Bước 5: chọn <label> có chứa chữ "word" và đổi màu chữ thành đen
$('label:contains("word")').css("color", "black");
