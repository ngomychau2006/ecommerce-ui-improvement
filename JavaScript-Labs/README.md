# JavaScript Labs – Phát triển ứng dụng TMĐT

## Thông tin sinh viên
- Họ và tên: NGÔ MỸ CHÂU
- MSSV: 31241027476
- Lớp học phần: 26C1INF50902702
- GitHub: https://github.com/ngomychau2006

## Mục tiêu
Thực hành JavaScript để xây dựng chức năng tương tác cho website thương mại điện tử:
- **Lab 08:** nền tảng ngôn ngữ JavaScript (biến, hàm, mảng, đối tượng, Console).
- **Lab 09:** thao tác DOM, xử lý sự kiện, làm việc với form và kiểm tra dữ liệu.
- **Lab 10:** thư viện jQuery (selectors, sự kiện, hiệu ứng, GET request, jqXHR).

## Cấu trúc thư mục
```
JavaScript-Labs/
├── index.html          # Trang chủ portfolio (thông tin cá nhân, liên kết 3 Lab, tổng kết)
├── css/style.css       # CSS của trang chủ
├── js/main.js          # JS của trang chủ (chuyển tab, tô sáng menu)
├── Lab08/              # 12 bài: Exercise01 … Exercise12
│   ├── index.html      # Mục lục Lab 08
│   └── README.md
├── Lab09/              # 8 bài: Exercise01 … Exercise08
│   ├── index.html      # Mục lục Lab 09
│   └── README.md
├── Lab10/              # 10 bài: Exercise01 … Exercise10
│   ├── index.html      # Mục lục Lab 10
│   └── README.md
└── README.md
```
Mỗi `ExerciseXX/` có `index.html` riêng, cùng thư mục `css/`, `js/` và `images/` (nếu bài cần).

## Nội dung từng Lab

### Lab 08 – JavaScript 1: Language Foundations
| Bài | Nội dung |
|---|---|
| 8.1 | Bật/tắt JavaScript và kiểm tra bằng `<noscript>` |
| 8.2 | JavaScript nhúng trong trang (`alert`) |
| 8.3 | JavaScript viết trong file `.js` riêng |
| 8.4 | Dùng `<noscript>` |
| 8.5 | Dùng Console của trình duyệt (`console.log/warn/error`, kiểm tra biến) |
| 8.6 | Đối tượng có sẵn: String, Date, Math; so sánh `==` và `===` |
| 8.7 | Mảng: `push`, `unshift`, vòng lặp tạo bảng lịch tháng |
| 8.8 | Hàm có tham số và giá trị trả về, phạm vi biến |
| 8.9 | Hàm như một đối tượng: hàm ẩn danh, truyền hàm làm tham số (tính thuế) |
| 8.10 | Tạo đối tượng: object literal, constructor function (đơn hàng) |
| 8.11 | Mảng các đối tượng (danh sách quốc gia, duyệt bằng `for…in`) |
| 8.12 | Travel posts: gom HTML lặp lại thành các hàm |

### Lab 09 – JavaScript 2: DOM and Events
| Bài | Nội dung |
|---|---|
| 9.1 | Chọn phần tử DOM, đọc/đổi nội dung, thuộc tính, style |
| 9.2 | Quan hệ giữa các node (cha, con, anh em), `nodeType` |
| 9.3 | Tạo phần tử mới và xóa phần tử |
| 9.4 | Xử lý sự kiện cơ bản: click, mouseover, mouseout |
| 9.5 | Sự kiện `load` |
| 9.6 | Gỡ lỗi sự kiện bằng DevTools (breakpoint) |
| 9.7 | Sự kiện focus/blur trên form |
| 9.8 | Kiểm tra dữ liệu form (ô trống, `preventDefault`) |

### Lab 10 – JavaScript 3: jQuery
| Bài | Nội dung |
|---|---|
| 10.1 | Nạp jQuery từ CDN, có bản dự phòng trong repo |
| 10.2 | Selectors cơ bản: `val()`, `html()`, `attr()`, `css()`, `addClass()` |
| 10.3 | Selectors nâng cao: `:password`, `:nth-child()`, `:contains()` |
| 10.4 | Listeners: `click()`, `on()`, `off()`, document ready |
| 10.5 | Chèn phần tử DOM: `before`, `after`, `append`, `prepend`… |
| 10.6 | Animation đơn giản: `fade`, `slide` |
| 10.7 | Animation nâng cao: xem trước ảnh khi rê chuột |
| 10.8 | `animate()` và chuỗi animation |
| 10.9 | GET request với `$.get()` và `$.each()` |
| 10.10 | Xử lý jqXHR: `done()`, `fail()`, `always()` |

## GitHub Pages
Thay `<TEN-REPO>` bằng tên repository của bạn:
- Trang chủ: https://ngomychau2006.github.io/<TEN-REPO>/JavaScript-Labs/
- Lab 08: https://ngomychau2006.github.io/<TEN-REPO>/JavaScript-Labs/Lab08/
- Lab 09: https://ngomychau2006.github.io/<TEN-REPO>/JavaScript-Labs/Lab09/
- Lab 10: https://ngomychau2006.github.io/<TEN-REPO>/JavaScript-Labs/Lab10/

## Hướng dẫn truy cập
1. Mở trang chủ ở đường dẫn GitHub Pages phía trên.
2. Bấm **Mở Lab 08 / 09 / 10** để vào mục lục của từng Lab.
3. Trong mục lục, bấm vào từng Exercise để xem kết quả chạy.
4. Mở F12 (Console) để xem log ở các bài 8.5, 9.2, 10.1.

Lưu ý khi chạy:
- Một số bài tải Bootstrap, Font Awesome qua CDN nên cần có Internet (8.12, 9.x, 10.1–10.3).
- Lab 10 nạp jQuery từ CDN, nếu lỗi sẽ tự dùng bản `js/jquery-3.1.1.min.js` trong từng bài.
- Bài 10.9 và 10.10 gọi web service của sách; nếu service không truy cập được, trang hiển thị dữ liệu mẫu thay thế.