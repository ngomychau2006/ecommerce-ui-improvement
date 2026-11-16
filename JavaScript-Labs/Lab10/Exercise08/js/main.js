/* Exercise 10.8 - COMPLEX ANIMATIONS */

$(function () {
    // Bước 2: animate thuộc tính left
    // $("button").click(function () {
    //     $("#box").animate({ left: '495px' });
    // });

    // Bước 3: animate cùng lúc 3 thuộc tính CSS
    // $("button").click(function () {
    //     $("#box").animate({
    //         left: '495px',
    //         opacity: '1',
    //         height: '50px'
    //     });
    // });

    // Bước 4 (bản cuối): 3 animation chạy nối tiếp nhau
    $("button").click(function () {
        $("#box")
            .animate({
                left: '495px',
                opacity: '1',
                height: '50px'
            })
            .animate({ top: '400px', opacity: '0.2' })
            .animate({ height: '200px' }, 2000);
    });
});
