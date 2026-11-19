
$(document).ready(function () {
    // 1. BOOTSTRAP STAR RATING

    $('.rating').rating({
        displayOnly: true,
        step: 0.1,
        showCaption: false,
        showClear: false,
        theme: 'krajee-svg'
    });

    // 2. XZOOM PRODUCT IMAGE

    if ($.fn.xzoom) {

        $('.xzoom').xzoom({
            position: 'inside',
            zoomWidth: 350,
            zoomHeight: 350,
            title: false,
            tint: '#333',
            tintOpacity: 0.2,
            lens: true,
            lensOpacity: 0.3,
            smoothZoomMove: 5
        });

        console.log('xZoom đã được khởi tạo thành công!');

    } else {

        console.error('Không tải được thư viện xZoom!');

    }

    // 3. ADD TO CART

    let cartCount = 0;

    $('#add-cart').on('click', function () {

        cartCount++;

        $('#cart-count').text(cartCount);

        $('#cart-message').text(
            'Đã thêm sản phẩm vào giỏ hàng thành công!'
        );

        $(this).text('ĐÃ THÊM VÀO GIỎ HÀNG');

        console.log('Số sản phẩm trong giỏ:', cartCount);

    });


});
