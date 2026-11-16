/* Exercise 10.1 - SET UP JQUERY
   jQuery đã được nạp trong <head> (CDN + bản dự phòng nội bộ).
   Đoạn dưới chỉ để kiểm tra jQuery đã chạy chưa. */

$(function () {
    var version = window.jQuery ? $.fn.jquery : "chưa nạp được";
    console.log("jQuery version: " + version);
    $('#msgArea').val("jQuery đã được nạp - version " + version);
});
