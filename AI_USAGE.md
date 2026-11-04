# Báo cáo sử dụng AI (AI Usage Report) - Buổi 1 & Buổi 2

## 1. Công cụ AI sử dụng
- **Tên công cụ:** ChatGPT.
- **Phạm vi hỗ trợ:** Phân tích giao diện website tham khảo (Hasaki.vn), đề xuất phương án cải tiến giỏ hàng (Buổi 1) và rà soát ngữ nghĩa HTML5, hoàn thiện CSS Selector, Box Model, Flexbox, CSS Grid, hiệu ứng tương tác `:hover`/`:focus-visible`, kiểm thử Responsive (Buổi 2).

---

## 2. Mục đích sử dụng
- **Ở Buổi 1:** Em sử dụng ChatGPT để hỗ trợ phân tích 5 khu vực giao diện của website Hasaki.vn, nhận diện những điểm thuận tiện và vấn đề có thể phát sinh trong trải nghiệm mua sắm, từ đó lựa chọn khu vực **Giỏ hàng** làm trọng tâm cải tiến (bổ sung checkbox chọn sản phẩm và ô nhập mã giảm giá). Sau đó, em sử dụng AI để tham khảo cách tổ chức bố cục HTML5/CSS3 và tạo mã nguồn minh họa ban đầu.
- **Ở Buổi 2:** Em tiếp tục sử dụng AI có kiểm soát theo đúng quy trình 8 bước của bài tập cá nhân Buổi 2:
  1. Rà soát mã nguồn Buổi 1 để tìm các điểm chưa hợp lý về ngữ nghĩa HTML, độ tương phản và trạng thái tương tác.
  2. Kiểm tra cách sử dụng các thẻ ngữ nghĩa HTML5 (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`), thứ bậc tiêu đề `h1`–`h3` và thuộc tính `alt`.
  3. Chuẩn hóa quy tắc CSS khởi tạo (`box-sizing: border-box`, `img { max-width: 100% }`) và kiểm tra liên kết stylesheet bằng DevTools.
  4. Thực hành CSS Selector và Box Model (`margin`, `padding`, `border`, `border-radius`) trên thẻ sản phẩm `.product-card`.
  5. Thực hành và giải thích cơ chế căn chỉnh Flexbox (`display: flex`, `justify-content`, `align-items`, `gap`) trên tiêu đề khối `.section-heading` và nhóm nút `.product-actions`.
  6. Phân tích bố cục CSS Grid (`grid-template-columns`, `repeat`, `minmax`, `fr`, `object-fit: cover`) trên `.cart-layout`, `.product-card` và `.recommendation-grid`.
  7. Bổ sung hiệu ứng `:hover`, `transition` và trạng thái `:focus-visible` hỗ trợ điều hướng bằng bàn phím (`Tab`).
  8. Phân tích nguyên nhân và đề xuất cách sửa ít thay đổi nhất cho các vấn đề phát hiện khi kiểm thử ở kích thước `1366px`, `768px` và `390px`.

---

## 3. Các Prompt đã sử dụng

### Phần A - Các Prompt sử dụng ở Buổi 1

#### Prompt 1 (Buổi 1) - Phân tích giao diện website tham khảo
```text
Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng cho website thương mại điện tử.
Tôi đang khảo sát website Hasaki Việt Nam: https://hasaki.vn/
Hãy giúp tôi lập bảng phân tích các khu vực:
- Trang chủ.
- Danh mục sản phẩm.
- Chi tiết sản phẩm.
- Tìm kiếm.
- Giỏ hàng.
Với mỗi khu vực, hãy nêu:
- Mục đích của chức năng.
- Thành phần giao diện cần có.
- Điểm thuận tiện đối với khách hàng.
- Một vấn đề có thể phát sinh.
- Một đề xuất cải tiến.
Không khẳng định những tính năng chưa được kiểm chứng.
Phân biệt rõ nhận xét dựa trên quan sát và đề xuất của AI.
```

#### Prompt 2 (Buổi 1) - Đề xuất phương án thiết kế giỏ hàng
```text
Tôi đang thực hiện bài tập phát triển giao diện website thương mại điện tử bằng HTML5 và CSS3.
Tôi muốn cải tiến khu vực giỏ hàng để bổ sung ô nhập mã giảm giá và checkbox chọn sản phẩm.
Đối tượng sử dụng: khách hàng mua sắm trực tuyến tại Việt Nam.
Hãy đề xuất:
1. Bố cục giao diện.
2. Các thành phần HTML cần sử dụng.
3. Cách tổ chức CSS.
4. Cách hiển thị trên máy tính và điện thoại.
5. Những điểm cần kiểm tra về khả năng sử dụng.
Trước tiên, hãy giải thích phương án thiết kế.
Chưa tạo toàn bộ mã nguồn cho đến khi tôi yêu cầu.
```

#### Prompt 3 (Buổi 1) - Tạo mã nguồn giao diện HTML5/CSS3
```text
Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện thương mại điện tử bằng HTML5 và CSS3.
Yêu cầu:
- Giao diện có tiêu đề và khu vực sản phẩm.
- Có tối thiểu 4 sản phẩm mẫu.
- Mỗi sản phẩm có hình ảnh, tên, giá và nút thao tác.
- Bố cục phù hợp với màn hình máy tính và điện thoại.
- Mã HTML có cấu trúc rõ ràng.
- CSS được tách thành file riêng.
- Không sử dụng backend hoặc cơ sở dữ liệu.
- Không đưa thư viện hoặc thành phần không cần thiết vào dự án.
Giải thích cách chạy trang web và những phần tôi cần kiểm tra.
```

---

### Phần B - Các Prompt sử dụng ở Buổi 2

#### Prompt 1 (Buổi 2 - Bước 1) - Phân tích mã nguồn hiện tại từ Buổi 1
```text
Tôi đang làm bài tập cá nhân môn Phát triển ứng dụng thương mại điện tử.
Trong Buổi 1, tôi đã khảo sát một website TMĐT (Hasaki.vn) và tạo một giao diện giỏ hàng cải tiến bằng HTML/CSS.
Đây là mã HTML hiện tại:
[Dán mã index.html từ Buổi 1]
Đây là mã CSS hiện tại:
[Dán mã css/style.css từ Buổi 1]
Hãy giúp tôi:
1. Xác định những thành phần HTML đã có.
2. Chỉ ra các thành phần HTML còn thiếu hoặc chưa hợp lý.
3. Nêu các vấn đề về cấu trúc HTML hoặc trình bày CSS (ngữ nghĩa, focus bàn phím, hover, độ tương phản, bố cục tablet/mobile).
4. Đề xuất cách cải thiện bằng kiến thức HTML5 và CSS3 cơ bản.
5. Giải thích thứ tự nên thực hiện các cải tiến.
Chưa viết lại toàn bộ mã nguồn. Không tạo website mới. Hãy giúp tôi hiểu mã hiện tại trước khi sửa.
```

#### Prompt 2 (Buổi 2 - Bước 2) - Kiểm tra cấu trúc HTML5 có ngữ nghĩa
```text
Tôi đang học HTML5 và muốn cải thiện cấu trúc HTML của bài tập Buổi 1.
Đây là mã HTML hiện tại:
[Dán mã index.html]
Hãy hướng dẫn tôi:
1. Xác định các phần tử HTML đang được sử dụng.
2. Kiểm tra cách sử dụng header, nav, main, section, article, aside và footer.
3. Kiểm tra thứ bậc tiêu đề h1, h2, h3.
4. Kiểm tra cách sử dụng img, alt, a và button.
5. Phát hiện các thẻ dùng chưa đúng ngữ nghĩa hoặc lồng nhau chưa hợp lý.
6. Đề xuất cách sửa phù hợp với nội dung hiện tại.
Hãy phân biệt lỗi cần sửa và đề xuất cải thiện. Không thêm phần tử HTML chỉ để làm mã nguồn dài hơn. Không viết lại toàn bộ website. Giải thích lý do của từng thay đổi.
```

#### Prompt 3 (Buổi 2 - Bước 3 & Bước 4) - Thực hành CSS cơ bản, Selector và Box Model
```text
Tôi muốn kiểm tra các quy tắc CSS nền tảng và thực hành CSS selector cùng Box Model trên thẻ sản phẩm (.product-card) trong website giỏ hàng của mình.
HTML hiện tại của thẻ sản phẩm:
[Dán đoạn HTML của <article class="product-card">]
Hãy hướng dẫn tôi:
1. Kiểm tra quy tắc khởi tạo cho body và img (box-sizing: border-box, max-width: 100%).
2. Sử dụng element selector, class selector và descendant selector trên .product-card.
3. Điều chỉnh margin, padding, border và border-radius cho ảnh sản phẩm (.product-image) và nhãn sản phẩm (.product-tag).
4. Định dạng tên, giá bán, giá gốc gạch ngang và nút thao tác.
Hãy giải thích sự khác nhau giữa margin và padding, tác dụng của box-sizing: border-box. Chỉ đưa ra phần CSS cần thiết, không tạo lại toàn bộ HTML.
```

#### Prompt 4 (Buổi 2 - Bước 5 & Bước 6) - Thực hành Flexbox và CSS Grid
```text
Tôi đang học CSS3 và muốn rà soát cách sử dụng Flexbox (trên thanh tiêu đề .section-heading và nhóm nút .product-actions) cũng như CSS Grid (trên .cart-layout, .product-card và .recommendation-grid).
Đây là HTML và CSS hiện tại của các khu vực trên:
[Dán đoạn mã HTML/CSS liên quan]
Hãy hướng dẫn tôi:
1. Giải thích vai trò của display: flex, justify-content, align-items, gap trên phần tử cha và so sánh kết quả khi thay đổi các giá trị của justify-content.
2. Giải thích grid-template-columns, repeat, minmax, đơn vị fr, gap và tác dụng của object-fit: cover đối với hình ảnh sản phẩm.
3. Phân biệt sự khác nhau giữa Flexbox và CSS Grid, giải thích vì sao dùng Grid cho bố cục giỏ hàng và danh sách sản phẩm.
```

#### Prompt 5 (Buổi 2 - Bước 7 & Bước 8) - Bổ sung hiệu ứng Hover/Focus và Kiểm tra lỗi giao diện
```text
Tôi đã hoàn thành phần bố cục giao diện giỏ hàng bằng HTML5 và CSS3.
Đây là mã HTML và CSS liên quan:
[Dán đoạn mã các nút thao tác, form voucher, thẻ gợi ý và media queries]
Tôi muốn:
1. Bổ sung hiệu ứng :hover nhẹ kết hợp transition cho nút +/-, nút Áp dụng voucher và thẻ gợi ý mua kèm.
2. Bổ sung trạng thái :focus-visible rõ ràng để hỗ trợ điều hướng bằng bàn phím (phím Tab).
3. Kiểm tra hai vấn đề tôi phát hiện khi test trên Chrome DevTools:
   - Vòng outline khi nhấn Tab vào nút +/- (.quantity button) bị cắt mất viền ngoài.
   - Ở kích thước điện thoại 390px, nút +/- (25x25px) khá nhỏ, dễ bấm trượt.
Hãy giúp tôi xác định nguyên nhân, đề xuất cách sửa ít thay đổi nhất trong CSS và giải thích cách kiểm tra lại sau khi sửa.
```

#### Prompt 6 (Buổi 2 - Bước 14) - Rà soát cấu trúc README.md
```text
Tôi đang hoàn thiện README.md cho bài tập cá nhân Buổi 2 của môn Phát triển ứng dụng TMĐT.
Bài tập tiếp tục phát triển website từ Buổi 1 (Giỏ hàng Hasaki.vn). Tôi đã thực hành HTML5, CSS selector, Box Model, Flexbox, CSS Grid và bổ sung hover/focus-visible.
Hãy đề xuất cấu trúc README ngắn gọn, đầy đủ gồm:
1. Giới thiệu bài tập.
2. Website tham khảo và khu vực đã cải tiến.
3. Những kỹ thuật HTML5/CSS3 đã thực hành.
4. Hướng dẫn chạy website.
5. Những thay đổi tôi đã thực hiện ở Buổi 1 và Buổi 2.
6. Công cụ AI đã sử dụng và cách tôi kiểm tra kết quả.
7. Đường dẫn repository và website triển khai.
Không tự bịa thông tin về dự án.
```

---

## 4. Kết quả AI đề xuất

### 4.1. Kết quả ở Buổi 1
- **Phân tích website (Prompt 1):** AI lập bảng phân tích 5 khu vực của Hasaki.vn và gợi ý 3 hướng cải tiến (bộ lọc danh mục, thanh tìm kiếm/gợi ý nhanh, và giỏ hàng).
- **Thiết kế & Tạo mã nguồn (Prompt 2 & 3):** AI đề xuất bố cục giỏ hàng 2 cột (danh sách 4 sản phẩm mẫu bên trái và hóa đơn tạm tính bên phải), bổ sung checkbox chọn từng món, ô nhập mã voucher, sử dụng thẻ ngữ nghĩa HTML5 kết hợp CSS Grid, Flexbox, `position: sticky` và Media Queries.

### 4.2. Kết quả ở Buổi 2
- **Rà soát mã nguồn & Ngữ nghĩa HTML5 (Prompt 1 & 2):**
  - AI xác định cấu trúc tiêu đề `h1` → `h2` → `h3` đã hợp lý, không bị nhảy cấp.
  - AI chỉ ra 3 điểm cần sửa trong HTML: (1) Nút `"Tiếp tục mua hàng →"` đang dùng `<button>` nhưng mang ý nghĩa điều hướng chuyển trang nên cần đổi sang `<a href="#">`; (2) Khu vực `.breadcrumb` đang dùng `<div>` nên đổi sang `<nav aria-label="Đường dẫn trang">` và thêm `aria-label="Điều hướng chính"` cho `.main-nav`; (3) Ba hình ảnh ở mục `"Thường được mua cùng"` đang dùng chung `alt="Sản phẩm chăm sóc da"`, cần sửa thành tên riêng của từng sản phẩm.
  - AI cũng đề xuất thêm việc bọc menu chính và thanh tiến trình 2 bước (`.steps`) bằng thẻ danh sách `<ul>/<li>`.
- **Thực hành Selector, Box Model, Flexbox & Grid (Prompt 3 & 4):**
  - AI hướng dẫn bổ sung `img { max-width: 100%; height: auto; }` vào CSS cơ bản.
  - Đề xuất đoạn CSS sử dụng descendant selector (`.product-card .product-image`, `.product-card .product-tag`, `.product-card .product-info h3`, `.product-card .product-price del`) để tinh chỉnh `border-radius: 12px`, `padding: 3px 8px`, `border: 1px solid #f9d3bb` và `margin`.
  - Giải thích chi tiết cơ chế hoạt động của Flexbox trên `.section-heading` và CSS Grid trên `.cart-layout`, `.product-card`, `.recommendation-grid`, cũng như đề xuất thêm mốc 2 cột cho `.recommendation-grid` ở màn hình tablet (`max-width: 900px`).
- **Tương tác Hover/Focus & Sửa lỗi kiểm thử (Prompt 5):**
  - AI gợi ý bổ sung `transition` và hiệu ứng `:hover` cho `.quantity button`, `.voucher-form button`, `.recommendation-grid article`, đồng thời tăng độ tương phản cho nút `.checkout-button` bằng màu nền `var(--orange-dark)`.
  - Giải thích nguyên nhân viền `:focus-visible` của nút `+/-` bị cắt là do phần tử cha `.quantity` có thuộc tính `overflow: hidden` khiến `outline-offset: 3px` vẽ ra ngoài vùng hiển thị bị ẩn đi; từ đó đề xuất sửa bằng `.quantity button:focus-visible { outline-offset: -3px; }`.
  - Đề xuất tăng kích thước `.quantity button` lên `32x32px` trong `@media (max-width: 600px)` để khắc phục vấn đề vùng chạm nhỏ trên màn hình điện thoại `390px`.

---

## 5. Kiểm tra và điều chỉnh kết quả AI của sinh viên

Em luôn kiểm chứng lại mọi đề xuất của AI trên trình duyệt thực tế và công cụ **Chrome DevTools** trước khi đưa vào bài tập:

1. **Đối chiếu thực tế website tham khảo (Buổi 1):**
   - AI cho rằng thanh tìm kiếm của Hasaki chưa tối ưu gợi ý và trang chi tiết sản phẩm thiếu thông tin tóm tắt khi cuộn. Khi trực tiếp khảo sát Hasaki.vn, em thấy thanh tìm kiếm đã có gợi ý sản phẩm kèm hình ảnh, giá và hỗ trợ gõ tiếng Việt không dấu rất tốt; trang chi tiết sản phẩm cũng đã có thanh dính (sticky bar) khi cuộn trang. Do đó, em bác bỏ hai hướng này và chọn cải tiến **Giỏ hàng**.
2. **Xử lý lỗi kẹt cuộn trên iPad Pro (Buổi 1):**
   - Mã CSS ban đầu do AI tạo giữ `position: sticky` cho `.summary-panel` đến tận mốc `900px`, gây lỗi trải nghiệm cuộn trên màn hình iPad Pro (`1032 x 1376`). Em đã chủ động nâng breakpoint lên `@media (max-width: 1200px)` để chuyển `.cart-layout` về 1 cột và đặt `.summary-panel { position: static; }`.
3. **Chọn lọc đề xuất chỉnh sửa HTML5 vừa đủ, tránh làm mã rườm rà (Buổi 2):**
   - Ở Bước 2 của Buổi 2, AI đề xuất đổi cả menu điều hướng `.main-nav` và thanh tiến trình `.steps` sang cấu trúc `<ul><li>...</li></ul>`. Em đã kiểm tra lại yêu cầu của đề bài (*"Không thêm phần tử HTML chỉ để làm mã nguồn dài hơn"*) và nhận thấy việc thêm `<ul>/<li>` khiến mã HTML phức tạp hơn và phải sửa lại nhiều bộ chọn Flexbox trong CSS trong khi giao diện không đổi. Vì vậy, em quyết định **giữ nguyên cấu trúc gọn gàng hiện tại** cho `.main-nav` và `.steps`, chỉ thực hiện những thay đổi thực sự mang lại giá trị ngữ nghĩa và khả năng tiếp cận cao: đổi `<button class="text-button">` thành `<a class="text-button" href="#">`, đổi `<div class="breadcrumb">` thành `<nav class="breadcrumb" aria-label="Đường dẫn trang">`, thêm `aria-label="Điều hướng chính"` cho `.main-nav` và viết `alt` riêng cho 3 ảnh gợi ý mua kèm.
4. **Kiểm tra bằng phím `Tab` và đo kiểm bằng DevTools (Buổi 2):**
   - Sau khi thêm `:focus-visible` theo gợi ý của AI, em trực tiếp nhấn phím `Tab` 14 lần từ đầu trang để kiểm tra từng phần tử tương tác. Em phát hiện viền focus trên nút `-` và `+` bị cắt mất mép ngoài do khung `.quantity` dùng `overflow: hidden` để bo góc. Em đã áp dụng giải pháp `outline-offset: -3px` để kéo đường viền focus vào bên trong nút, giúp hiển thị rõ ràng mà không làm vỡ bo góc của cụm nút.
   - Đối với đề xuất tăng độ tương phản màu sắc, em kiểm tra trên DevTools và chỉ đổi màu nền sang `var(--orange-dark)` (`#d95512`) cho riêng nút hành động chính `.checkout-button` để chữ trắng nổi bật rõ ràng mà vẫn giữ đúng nhận diện thương hiệu cam tươi ở các điểm nhấn khác.

---

## 6. Những kiến thức em hiểu và có thể giải thích từ mã nguồn HTML/CSS

- **Ngữ nghĩa HTML5 (Semantic HTML5):**
  - Hiểu rõ vai trò của từng thẻ bố cục: `<header>` (đầu trang), `<nav>` (vùng liên kết điều hướng, kết hợp `aria-label` khi có nhiều `nav`), `<main>` (nội dung chính duy nhất của trang), `<section>` (nhóm nội dung có tiêu đề `h1`/`h2`), `<article>` (đơn vị nội dung độc lập có thể tách rời như từng sản phẩm `.product-card` hoặc ô gợi ý), `<aside>` (khối thông tin bổ trợ `.summary-panel` đi kèm nội dung chính) và `<footer>` (chân trang).
  - Phân biệt đúng ngữ nghĩa tương tác: dùng `<a>` khi điều hướng liên kết (`Tiếp tục mua hàng →`, `Xem tất cả →`) và dùng `<button type="button">` khi thực hiện hành động tại chỗ (`Yêu thích`, `Xóa`, `−`, `+`, `Áp dụng`, `Tiến hành đặt hàng`).
- **CSS Selector & Mô hình hộp (Box Model):**
  - Sử dụng linh hoạt các loại bộ chọn: Element selector (`body`, `h1`, `img`), Class selector (`.product-card`, `.discount`), Descendant selector (`.product-card .product-image`, `.product-info h3`), Attribute selector (`input[type=checkbox]`) và Pseudo-class (`:hover`, `:focus-visible`).
  - Phân biệt rõ **`padding`** (khoảng trống bên trong giữa nội dung và viền, chịu ảnh hưởng của màu nền `background` như ở nhãn `.product-tag { padding: 3px 8px; }`) và **`margin`** (khoảng trống bên ngoài viền dùng để đẩy các phần tử cách nhau, không có màu nền như `.variant { margin: 5px 0 13px; }`).
  - Hiểu rõ tác dụng của **`box-sizing: border-box`**: giúp `width` của phần tử đã bao gồm cả `padding` và `border`, nhờ đó ô nhập `.voucher-form input` (`width: 100%; padding: 10px; border: 1px solid`) vừa khít khung chứa mà không bị tràn thêm `22px` ra ngoài như `content-box` mặc định.
- **Bố cục Flexbox và CSS Grid:**
  - **Flexbox (bố cục 1 chiều):** Đặt `display: flex` trên phần tử cha để sắp xếp các phần tử con theo hàng ngang hoặc cột dọc; dùng `justify-content` căn theo trục chính (như `space-between` đẩy tiêu đề sang trái và nút sang phải ở `.section-heading`, `.total-line`), `align-items` căn theo trục phụ (`center` giúp các phần tử cao thấp khác nhau thẳng hàng giữa theo chiều dọc) và `gap` tạo khoảng cách chỉ giữa các phần tử con mà không gây dư lề ở hai đầu.
  - **CSS Grid (bố cục 2 chiều):** Sử dụng `display: grid` kết hợp `grid-template-columns`, `repeat()`, `minmax(0, 1fr)` và đơn vị tỷ lệ `fr` cho bố cục 2 cột `.cart-layout`, lưới 3 cột `.recommendation-grid` và cấu trúc 4 cột bên trong `.product-card` (`18px 88px minmax(0, 1fr) auto`), giúp các cột thông tin và giá của mọi sản phẩm luôn thẳng hàng dọc với nhau bất kể độ dài tên sản phẩm. Kết hợp `object-fit: cover` giúp ảnh sản phẩm luôn lấp đầy khung cố định (`88x100px` và `58x58px`) mà không bị méo tỷ lệ.
- **Phản hồi tương tác (`:hover`, `:focus-visible`) & Responsive Design:**
  - Phân biệt rõ `:hover` (phản hồi khi di chuột lên phần tử) và `:focus-visible` (hiển thị vòng viền định vị khi người dùng điều hướng bằng bàn phím qua phím `Tab`, hỗ trợ khả năng tiếp cận mà không gây vướng mắt khi click chuột).
  - Sử dụng `@media` ở các mốc `1200px`, `900px` và `600px` để chuyển đổi số cột Grid, điều chỉnh thanh điều hướng và tối ưu kích thước nút bấm (`32x32px`) trên màn hình cảm ứng nhỏ (`390px`).
