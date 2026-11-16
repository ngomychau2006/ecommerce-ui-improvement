/* Exercise 10.10 - JQXHR HANDLING */

/* Dữ liệu dự phòng khi web service không truy cập được */
var FALLBACK_CITIES = [
    { "id": 1, "name": "Athens" },
    { "id": 2, "name": "Bangkok" },
    { "id": 3, "name": "Barcelona" },
    { "id": 4, "name": "Battle" },
    { "id": 5, "name": "Berlin" },
    { "id": 6, "name": "Budapest" },
    { "id": 7, "name": "Cairo" },
    { "id": 8, "name": "Florence" },
    { "id": 9, "name": "Istanbul" },
    { "id": 10, "name": "London" },
    { "id": 11, "name": "Lunenburg" },
    { "id": 12, "name": "Madrid" },
    { "id": 13, "name": "Paris" },
    { "id": 14, "name": "Prague" },
    { "id": 15, "name": "Rome" },
    { "id": 16, "name": "Vienna" }
];

var URL_CITIES = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";

function showCities(data) {
    $.each(data, function (index, value) {
        var li = $('<li/>').html(value.name);
        li.appendTo("div#results ul");
    });
}

$(function () {
    $('.animLoading').hide();

    $("#consume").click(function () {
        $('.animLoading').show();
        $("div#results ul").empty();
        var url = URL_CITIES;

        $.get({ url: url, dataType: "json", timeout: 5000 })
            // done chạy đầu tiên
            .done(function (data) {
                showCities(data);
            })
            // nếu có lỗi thì chạy fail, trước always()
            .fail(function (xhr, status, error) {
                console.warn("failed loading data - status=" + status + " error=" + error);
                // Bản gốc của bài dùng alert(); ở đây ghi log và hiển thị dữ liệu mẫu
                // để trang vẫn hoạt động khi chạy offline / trên GitHub Pages.
                $("div#results ul").before("<p><em>Không gọi được web service (" + status + ") - hiển thị dữ liệu mẫu:</em></p>");
                showCities(FALLBACK_CITIES);
            })
            // always luôn nằm cuối
            .always(function (data) {
                $('.animLoading').fadeOut("slow");
            });
    });
});
