/* Exercise 10.2 - BASIC SELECTORS */

// Bước 2: chọn <textarea> theo id và gán giá trị
var msg = $('#msgArea');
msg.val("here is some new text");

// Bước 3: html() đọc/gán nội dung HTML của phần tử
$('#first').html("new Title");

// Bước 4: attr() đọc/gán thuộc tính HTML
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

// Bước 5: chọn tất cả <button> và đổi màu nền
var buttons = $('button');
buttons.css('background-color', 'red');

// Bước 6: chọn <body> và đổi màu nền
var temp = $('body');
temp.css("background-color", "ivory");

// Bước 7: thêm class cho các phần tử .center-icons
$('.center-icons').addClass('selected');
