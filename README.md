# Bài tập cá nhân: Cải tiến giao diện Giỏ hàng Thương mại điện tử (Hasaki.vn)

- **Sinh viên thực hiện:** Ngô Mỹ Châu
- **Mã số sinh viên:** 31241027476
- **Lớp:** 26C1INF50902702
- **Giảng viên hướng dẫn:** TS. Nguyễn Mạnh Tuấn
- **GitHub Repository:** [https://github.com/ngomychau2006/ecommerce-ui-improvement](https://github.com/ngomychau2006/ecommerce-ui-improvement)
- **Website triển khai (GitHub Pages):** [https://ngomychau2006.github.io/ecommerce-ui-improvement/](https://ngomychau2006.github.io/ecommerce-ui-improvement/)

---

## 1. Giới thiệu bài tập
Trong bài tập cá nhân môn Phát triển ứng dụng WEB/TMĐT, em lựa chọn website **Hasaki.vn** làm website tham khảo để khảo sát, phân tích giao diện và đề xuất cải tiến trải nghiệm mua sắm trực tuyến. Hasaki là website thương mại điện tử hoạt động trong lĩnh vực bán lẻ mỹ phẩm, sản phẩm chăm sóc cá nhân, gia dụng và nhiều mặt hàng phục vụ nhu cầu tiêu dùng hằng ngày. Ngoài cung cấp các sản phẩm làm đẹp, Hasaki còn giới thiệu dịch vụ chăm sóc sắc đẹp tại hệ thống Hasaki Clinic và các cơ sở liên quan. Nhóm khách hàng mục tiêu của Hasaki là người có nhu cầu chăm sóc sắc đẹp (học sinh, sinh viên và người trẻ...) muốn tra cứu thông tin, so sánh sản phẩm, tận dụng ưu đãi và đặt hàng trực tuyến.

- **Ở Buổi 1:** Sau khi khảo sát 5 khu vực giao diện chính của Hasaki (Trang chủ, Danh mục sản phẩm, Chi tiết sản phẩm, Tìm kiếm, Giỏ hàng), em lựa chọn khu vực **Giỏ hàng** để thực hiện cải tiến bằng HTML5 và CSS3 với hai ý tưởng trọng tâm: bổ sung **checkbox chọn riêng từng sản phẩm** muốn thanh toán và bổ sung **khu vực nhập mã giảm giá (voucher)** trực tiếp tại giỏ hàng.
- **Ở Buổi 2:** Em tiếp tục kế thừa và hoàn thiện giao diện Giỏ hàng từ Buổi 1 thông qua việc rà soát mã nguồn, củng cố cấu trúc HTML5 có ngữ nghĩa (semantic HTML), chuẩn hóa liên kết CSS, thực hành chuyên sâu CSS Selector, Box Model, Flexbox, CSS Grid, bổ sung phản hồi tương tác (`:hover`, `:focus-visible`, `transition`) và kiểm thử khả năng hiển thị (Responsive) trên nhiều kích thước thiết bị bằng Chrome DevTools.

## 2. Website tham khảo và khu vực cải tiến
- **Tên website:** Hasaki.vn
- **Địa chỉ:** [https://hasaki.vn/](https://hasaki.vn/)
- **Các khu vực đã khảo sát:**
  - **Trang chủ:** Hiển thị thông tin khuyến mãi, chương trình Flash Deal, danh mục sản phẩm, thương hiệu, sản phẩm bán chạy, top tìm kiếm, dịch vụ Hasaki Clinic và các gợi ý cá nhân hóa.
  - **Danh mục sản phẩm:** Cho phép duyệt sản phẩm theo danh mục, thương hiệu và các thuộc tính như phân loại, dòng sản phẩm, loại, dung tích và công dụng.
  - **Chi tiết sản phẩm:** Hiển thị hình ảnh, tên, giá và thông tin liên quan; có thanh tóm tắt sản phẩm khi cuộn trang và các tab nội dung.
  - **Tìm kiếm:** Cho phép nhập từ khóa; hiển thị gợi ý từ khóa, sản phẩm kèm hình ảnh và giá, hỗ trợ lọc nhanh theo thương hiệu và tìm kiếm bằng từ khóa không dấu.
  - **Giỏ hàng (Khu vực trọng tâm cải tiến):** Tập hợp sản phẩm đã chọn, cho phép điều chỉnh số lượng, xóa hoặc thêm vào danh sách yêu thích; hiển thị tạm tính, giảm giá, tổng cộng, nút tiến hành đặt hàng và gợi ý sản phẩm mua kèm.

## 3. Những kỹ thuật HTML5 / CSS3 đã thực hành

### 3.1. Công nghệ và kỹ thuật tổng quan
- **HTML5 có ngữ nghĩa (Semantic HTML5):** Sử dụng hợp lý các thẻ `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, hệ thống tiêu đề phân cấp `<h1>`–`<h3>`, `<label>` gắn với `<input>`, `<del>`, `<strong>` và thuộc tính `alt` mô tả riêng cho từng hình ảnh, kết hợp `aria-label` để phân biệt các vùng điều hướng (`main-nav` và `breadcrumb`).
- **CSS3 & Tổ chức bố cục:**
  - **Biến CSS (`:root`) & Reset cơ bản:** Quản lý bảng màu thương hiệu (`--orange`, `--orange-dark`, `--ink`, `--muted`, `--soft`, `--green`, `--page`), thiết lập `box-sizing: border-box` và `img { max-width: 100%; height: auto; }` chống tràn khung.
  - **CSS Selector & Box Model:** Áp dụng Element selector, Class selector, Descendant selector (`.product-card .product-image`, `.product-card .product-tag`), Attribute selector (`input[type=checkbox]`) và Pseudo-class (`:hover`, `:focus-visible`). Tinh chỉnh `margin`, `padding`, `border`, `border-radius` trên thẻ sản phẩm và nhãn khuyến mãi.
  - **Flexbox:** Căn chỉnh một chiều cho thanh điều hướng `.topbar`, `.main-nav`, `.header-actions`, tiêu đề khối `.section-heading` (`justify-content: space-between`, `align-items: center`), nhóm nút `.product-actions`, ô nhập `.voucher-form`, các dòng hóa đơn `.total-line` và `.checkout-button`.
  - **CSS Grid:** Tổ chức bố cục hai chiều cho toàn trang giỏ hàng `.cart-layout` (2 cột tỷ lệ `1.7fr` và `.9fr`), lưới 3 sản phẩm mua kèm `.recommendation-grid` (`repeat(3, minmax(0, 1fr))`), cấu trúc 4 cột bên trong từng thẻ `.product-card` và kết hợp `object-fit: cover` giữ tỷ lệ ảnh.
  - **Hiệu ứng tương tác & Khả năng tiếp cận (Accessibility):** Sử dụng `transition` mượt mà khi `:hover` trên các nút số lượng, nút áp dụng voucher, thẻ gợi ý mua kèm và nút đặt hàng; bổ sung `:focus-visible` với `outline: 3px solid #b45309` và xử lý `outline-offset: -3px` cho nút `+/-` để hỗ trợ điều hướng bằng bàn phím (`Tab`).
  - **Responsive Design (Media Queries):** Tối ưu hiển thị ở các mốc `1200px` (chuyển giỏ hàng về 1 cột và `position: static` cho hóa đơn trên iPad/Tablet), `900px` (điều chỉnh menu và chuyển lưới gợi ý sang 2 cột trên tablet) và `600px` (thu gọn thẻ sản phẩm, tăng kích thước vùng chạm nút `+/-` lên `32x32px` trên điện thoại `390px`).

### 3.2. Cấu trúc thư mục dự án
```text
ecommerce-ui-improvement/
├── index.html
├── css/
│   └── style.css
├── images/
│   └── product-demo.jpg
├── README.md
└── AI_USAGE.md
```

## 4. Hướng dẫn chạy website
1. Tải về hoặc giải nén thư mục dự án `ecommerce-ui-improvement`.
2. Đảm bảo giữ nguyên cấu trúc thư mục: file `index.html` ở thư mục gốc, file định dạng tại `css/style.css` và hình ảnh tại `images/product-demo.jpg`.
3. Mở trực tiếp file `index.html` bằng trình duyệt web (Google Chrome, Microsoft Edge, Safari hoặc Firefox).
4. Sử dụng công cụ **Chrome DevTools** (`F12` hoặc `Ctrl + Shift + I` / `Cmd + Option + I`) để kiểm tra giao diện ở các kích thước màn hình `1366px` (Desktop), `1032px` / `768px` (Tablet) và `390px` (Mobile), đồng thời nhấn phím `Tab` để kiểm tra trạng thái `:focus-visible`.

## 5. Những cải tiến và thay đổi đã thực hiện

### 5.1. Cải tiến giao diện ở Buổi 1
- Xây dựng giao diện giỏ hàng gồm danh sách 4 sản phẩm mẫu có đầy đủ hình ảnh, nhãn phân loại, tên, dung tích, giá bán, giá gốc, phần trăm giảm và bộ chọn số lượng.
- Bổ sung **checkbox chọn từng sản phẩm** và tùy chọn **“Chọn tất cả”**.
- Bổ sung **khu vực nhập mã giảm giá (voucher)** trực tiếp trong cột hóa đơn tạm tính.
- Xử lý lỗi kẹt cuộn (`scroll locking`) của khối hóa đơn `position: sticky` trên màn hình iPad Pro (`max-width: 1200px`).

### 5.2. Rà soát và hoàn thiện ở Buổi 2
Qua quá trình rà soát mã nguồn Buổi 1 và kiểm thử thực tế ở Buổi 2, em đã phát hiện và khắc phục 6 vấn đề trọng tâm:
1. **Chuẩn hóa ngữ nghĩa HTML5:**
   - Đổi nút `<button class="text-button">Tiếp tục mua hàng →</button>` sang thẻ liên kết `<a class="text-button" href="#">Tiếp tục mua hàng →</a>` vì thành phần này mang chức năng điều hướng.
   - Đổi `<div class="breadcrumb">` sang `<nav class="breadcrumb" aria-label="Đường dẫn trang">` và bổ sung `aria-label="Điều hướng chính"` cho `<nav class="main-nav">` để công cụ đọc màn hình phân biệt rõ hai vùng điều hướng.
   - Cập nhật thuộc tính `alt` riêng biệt cho 3 sản phẩm ở khu vực “Thường được mua cùng” (`Mặt nạ cấp ẩm`, `Tẩy trang dịu nhẹ`, `Kem dưỡng ẩm`) thay vì dùng chung một mô tả.
2. **Thực hành Box Model & Selector trên thẻ sản phẩm (`.product-card`):**
   - Bo góc ảnh `.product-image` mềm mại hơn (`border-radius: 12px`), đổi màu viền ấm `#f1e4da` và đổi sang màu cam thương hiệu khi rê chuột vào thẻ (`.product-card:hover .product-image`).
   - Tinh chỉnh `padding: 3px 8px` và thêm viền `border: 1px solid #f9d3bb` cho nhãn `.product-tag`, tách khoảng cách `margin` hợp lý giữa tên sản phẩm và giá gốc.
3. **Bổ sung phản hồi tương tác `:hover` và `transition`:**
   - Thêm hiệu ứng đổi màu nền và viền mượt mà (`transition: .2s`) cho nút tăng/giảm số lượng (`.quantity button:hover`), nút áp dụng mã giảm giá (`.voucher-form button:hover`), các liên kết điều hướng phụ và hiệu ứng đổ bóng nhẹ (`box-shadow`) cho thẻ gợi ý mua kèm (`.recommendation-grid article:hover`).
4. **Hỗ trợ điều hướng bàn phím (`:focus-visible`):**
   - Bổ sung đường viền `outline: 3px solid #b45309; outline-offset: 3px;` cho toàn bộ liên kết `a`, `button`, `input` và `checkbox`.
   - Khắc phục lỗi viền focus của nút `+/-` bị cắt khuất do thuộc tính `overflow: hidden` trên khung `.quantity` bằng quy tắc `.quantity button:focus-visible { outline-offset: -3px; }`.
5. **Cải thiện độ tương phản và lưới Responsive:**
   - Điều chỉnh màu nền nút chính `.checkout-button` sang cam đậm (`var(--orange-dark)`) để tăng độ tương phản chữ trắng trên nền cam, giúp dễ đọc hơn.
   - Bổ sung mốc lưới 2 cột cho `.recommendation-grid` ở màn hình máy tính bảng (`@media (max-width: 900px)`) trước khi thu về 1 cột ở màn hình điện thoại (`600px`).
6. **Tự phát hiện và sửa lỗi kích thước vùng chạm trên điện thoại (`390px`):**
   - Phát hiện nút tăng/giảm số lượng (`25x25px`) hơi nhỏ khi thao tác bằng ngón tay trên màn hình hẹp `390px`. Em đã bổ sung media query `@media (max-width: 600px)` để tăng kích thước `.quantity button` lên `32x32px` và `.quantity span` lên `min-width: 30px`, giúp thao tác chính xác mà không làm tràn bố cục.

### 5.3. Bảng kết quả kiểm thử (Bước 8 - Buổi 2)
| Nội dung kiểm tra | Kết quả | Ghi chú |
| :--- | :---: | :--- |
| Trang HTML mở được | **Đạt** | Mở trực tiếp `index.html`, không cần máy chủ |
| CSS được áp dụng | **Đạt** | 1 stylesheet được nạp (`css/style.css`), màu nền `#f7f8fa` |
| Hình ảnh hiển thị đúng | **Đạt** | Mọi thẻ `img` có `naturalWidth > 0`; không méo nhờ `object-fit: cover` |
| Liên kết hoạt động | **Đạt** | Sử dụng `href="#"` cho giao diện tĩnh 1 trang |
| Bố cục không bị tràn nghiêm trọng | **Đạt** | Không xuất hiện thanh cuộn ngang ở cả 4 kích thước (`1366px`, `1032px`, `768px`, `390px`) |
| Hover / Focus hoạt động | **Đạt** | Đã kiểm tra bằng chuột và phím `Tab`; đã sửa lỗi cắt viền focus ở nút `+/-` |
| Đã tự sửa ít nhất một vấn đề | **Đạt** | Đã rà soát và khắc phục 6 vấn đề về ngữ nghĩa, tương tác và vùng bấm mobile |

## 6. Công cụ AI đã sử dụng và cách kiểm tra kết quả
Trong quá trình thực hiện bài tập Buổi 1 và Buổi 2, em sử dụng **ChatGPT** với vai trò trợ lý gợi ý phân tích, kiểm tra cấu trúc mã nguồn và giải thích kỹ thuật (chi tiết toàn bộ các prompt được ghi lại trong tệp [`AI_USAGE.md`](AI_USAGE.md)):
- **Tại Buổi 1:** Sử dụng 3 prompt để phân tích 5 khu vực của website Hasaki.vn, đề xuất bố cục giỏ hàng cải tiến (thêm checkbox và ô nhập voucher) và khởi tạo khung mã HTML5/CSS3 ban đầu.
- **Tại Buổi 2:** Sử dụng các prompt theo từng bước thực hành để rà soát mã nguồn Buổi 1, kiểm tra ngữ nghĩa HTML5, chuẩn hóa CSS cơ bản, thực hành Selector & Box Model trên `.product-card`, thực hành Flexbox trên `.section-heading` và `.product-actions`, phân tích bố cục CSS Grid, bổ sung `:hover` / `:focus-visible`, hỗ trợ kiểm tra lỗi hiển thị trên thiết bị di động và rà soát cấu trúc `README.md`.
- **Cách kiểm tra và tự điều chỉnh kết quả từ AI:**
  - Em không sao chép nguyên mẫu mọi gợi ý của AI mà luôn đối chiếu trực tiếp với giao diện thực tế và kiểm tra trên **Chrome DevTools**.
  - *Ví dụ tại Buổi 1:* AI nhận xét thanh tìm kiếm của Hasaki thiếu gợi ý sản phẩm, nhưng qua khảo sát thực tế Hasaki đã hỗ trợ gợi ý kèm ảnh/giá và tìm kiếm không dấu rất tốt, nên em loại bỏ hướng này và chọn cải tiến Giỏ hàng. Đồng thời em tự phát hiện và sửa lỗi kẹt cuộn `position: sticky` trên iPad Pro (`1032 x 1376`).
  - *Ví dụ tại Buổi 2:* AI gợi ý chuyển toàn bộ menu điều hướng và thanh tiến trình 2 bước sang cấu trúc danh sách `<ul>/<li>`. Sau khi xem xét, em nhận thấy việc bọc thêm thẻ sẽ làm mã HTML dài hơn và phải viết lại nhiều quy tắc CSS trong khi đề bài lưu ý *"Không thêm phần tử HTML chỉ để làm mã nguồn dài hơn"*, nên em giữ nguyên cấu trúc gọn gàng hiện tại và chỉ đổi `<div class="breadcrumb">` sang `<nav aria-label="Đường dẫn trang">` cùng thẻ `<a class="text-button">`. Ngoài ra, khi kiểm tra phím `Tab` thực tế trên trình duyệt, em tự phát hiện viền focus của nút `+/-` bị cắt bởi `overflow: hidden` và chủ động sửa bằng `outline-offset: -3px`.
