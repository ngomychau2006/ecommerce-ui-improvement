/* Exercise 10.6 - SIMPLE JQUERY ANIMATION */

$(function () {
    // Bước 2: fade in trong 1000 ms
    $("#btnFadeIn").click(function () {
        $("figure").fadeIn(1000);
    });

    // Bước 3: fade out trong 1000 ms
    $("#btnFadeOut").click(function () {
        $("figure").fadeOut(1000);
    });

    // Bước 4: fadeToggle - tự chuyển giữa hiện / ẩn
    $("#btnFade").click(function () {
        $("figure").fadeToggle(500);
    });

    // Bước 5: các nút slide
    $("#btnSlideDown").click(function () {
        $("figure").slideDown("slow");
    });
    $("#btnSlideUp").click(function () {
        $("figure").slideUp("slow");
    });
    $("#btnSlide").click(function () {
        $("figure").slideToggle(2000);
    });
});
