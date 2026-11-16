/* Exercise 10.4 - JQUERY LISTENERS */

// Bước 2: dùng phương thức tắt click()
// $(".panel").click(function () {
//     $("#message").html("You clicked in the panel");
// });

// Bước 3: dùng on() - dùng được cho mọi loại sự kiện
// $(".panel").on("click", function () {
//     $("#message").html("You clicked in the panel");
// });

// Bước 4: bọc trong document ready
// $(function () {
//     $(".panel").on("click", function () {
//         $("#message").html("You clicked in the panel");
//     });
// });

// Bước 5 (bản cuối): gắn nhiều sự kiện bằng chaining
$(function () {
    $(".panel")
        .on("mousemove", function (e) {
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })
        .on("mouseleave", function (e) {
            $("#message").html("goodbye!");
        })
        .on("click", function () {
            $("#message").html("stopped move reporting");
            $(".panel").off("mousemove");
        });
});
