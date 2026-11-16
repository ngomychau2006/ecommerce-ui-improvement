/* Exercise 10.9 - GET REQUESTS */

/* Dữ liệu dự phòng: dùng khi web service của tác giả không truy cập được
   (hết hạn, bị chặn CORS, hoặc trang chạy trên https nhưng service chỉ có http). */
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

// Hiển thị danh sách thành phố bằng $.each()
function showCities(data) {
    $.each(data, function (index, value) {
        var li = $('<li/>').html(value.name);
        li.appendTo("div#results ul");
    });
}

$(function () {
    $("#consume").click(function () {
        var url = URL_CITIES;
        $("#results").html("<ul></ul>");

        // Bước 3: ban đầu dùng vòng for + chuỗi "<br>"
        // Bước 4: kiểm tra status == "success"
        // Bước 5 (bản cuối): dùng $.each() tạo <li>
        $.get({ url: url, dataType: "json", timeout: 5000 }, function (data, status) {
            if (status == "success") {
                showCities(data);
            }
        }).fail(function () {
            // service lỗi -> dùng dữ liệu dự phòng để trang vẫn chạy được
            $("#results").html("<p><em>Không gọi được web service - hiển thị dữ liệu mẫu:</em></p><ul></ul>");
            showCities(FALLBACK_CITIES);
        });
    });
});
