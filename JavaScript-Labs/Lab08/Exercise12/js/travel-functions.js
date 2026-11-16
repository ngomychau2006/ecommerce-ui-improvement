/* Hàm dùng để thay thế các đoạn HTML lặp lại bằng lời gọi hàm.
   Dữ liệu lấy từ travel-data.js (continents, countries, posts). */

// Danh sách các châu lục (không có mục nào đang active)
function outputContinents() {
    document.write('<ul class="list-group">');
    for (var i = 0; i < continents.length; i++) {
        document.write('<li class="list-group-item"><a href="#">' + continents[i] + '</a></li>');
    }
    document.write('</ul>');
}

// Danh sách các quốc gia; quốc gia đang chọn (active) thì không có link
function outputCountries(activeCountry) {
    document.write('<ul class="list-group">');
    for (var i = 0; i < countries.length; i++) {
        if (countries[i] === activeCountry) {
            document.write('<li class="list-group-item active">' + countries[i] + '</li>');
        } else {
            document.write('<li class="list-group-item"><a href="#">' + countries[i] + '</a></li>');
        }
    }
    document.write('</ul>');
}

// Một dòng tóm tắt bài viết (post summary)
function outputPostRow(post) {
    var row = '<div class="row">';
    row += '<div class="col-md-2">';
    row += '<a href="post.php?id=' + post.id + '"><img src="images/travel/' + post.thumb + '" alt="' + post.title + '" class="img-thumbnail"/></a>';
    row += '</div>';
    row += '<div class="col-md-10">';
    row += '<h2>' + post.title + '</h2>';
    row += '<div class="details">Posted by ' + post.user;
    row += '<span class="pull-right">' + post.postdate + '</span></div>';
    row += '<p class="excerpt">' + post.excerpt + '</p>';
    row += '<p><a href="post.php?id=' + post.id + '" class="btn btn-primary btn-sm">Read more</a></p>';
    row += '</div>';
    row += '</div>';
    return row;
}

// Toàn bộ danh sách bài viết, có đường kẻ <hr/> giữa các bài
function outputPosts() {
    for (var i = 0; i < posts.length; i++) {
        document.write(outputPostRow(posts[i]));
        if (i < posts.length - 1) {
            document.write('<hr/>');
        }
    }
}

// Phân trang: totalPages trang, trang hiện tại là currentPage
function outputPagination(currentPage, totalPages) {
    document.write('<ul class="pagination">');
    document.write('<li><a href="#">&laquo;</a></li>');
    for (var p = 1; p <= totalPages; p++) {
        if (p === currentPage) {
            document.write('<li class="active"><a href="#">' + p + '</a></li>');
        } else {
            document.write('<li><a href="#">' + p + '</a></li>');
        }
    }
    document.write('<li><a href="#">&raquo;</a></li>');
    document.write('</ul>');
}
