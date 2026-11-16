/* Exercise 10.7 - MORE JQUERY ANIMATION */

$(function () {

    $('figure img').on('mouseover', function (e) {

        // tạo đường dẫn ảnh lớn dựa trên ảnh nhỏ hiện tại
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");

        // tạo phần tử động: ảnh lớn + chú thích
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');
        preview.append(image);
        preview.append(caption);
        $('body').append(preview);

        // làm ảnh nhỏ chuyển sang xám
        $(this).addClass("gray");

        // rồi fade ảnh xem trước hiện ra
        $("#preview").fadeIn(1000);
    });

    // Bước 3: hai hàm xử lý
    function removePreview() {
        // xóa phần tử động và bỏ class gray
        $(this).removeClass("gray");
        $("#preview").remove();
    }

    function movePreview(e) {
        // đặt vị trí preview theo tọa độ chuột
        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");
    }

    // Bước 4: gắn sự kiện
    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);
});
