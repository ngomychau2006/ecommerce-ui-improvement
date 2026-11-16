/* Exercise 10.5 - INSERTING DOM ELEMENTS */

$(function () {
    // Bước 2: tạo phần tử DOM mới
    var img = $('<img src="images/art/thumbs/13030.jpg" alt="art thumbnail">');

    // và thêm vào sau panel
    var panel = $('.panel');

    // Các bước 2-8 chỉ thay đổi dòng cuối. Bỏ comment từng dòng để thử:
    // panel.after(img);          // Bước 2: chèn SAU panel
    // panel.before(img);         // Bước 3: chèn TRƯỚC panel
    // panel.append(img);         // Bước 4: chèn vào CUỐI bên trong panel
    // panel.prepend(img);        // Bước 5: chèn vào ĐẦU bên trong panel
    // img.appendTo(panel);       // Bước 6: tương đương append
    // img.prependTo(panel);      // Bước 7: tương đương prepend
    img.insertBefore(panel);      // Bước 8: tương đương before (bản cuối)
});
