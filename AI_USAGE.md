## 1. Công cụ AI
Tên công cụ: ChatGPT.
## 2. Mục đích sử dụng
Em sử dụng ChatGPT để hỗ trợ quá trình thực hiện bài tập bằng HTML5 và CSS3. Em sử dụng AI để phân tích các khu vực giao diện của website Hasaki.vn, nhận diện những điểm thuận tiện và vấn đề có thể phát sinh trong trải nghiệm mua sắm, đề xuất các hướng cải tiến và lựa chọn phương án phù hợp với phạm vi bài tập. Sau khi lựa chọn khu vực giỏ hàng thì em tiếp tục sử dụng AI để tham khảo cách tổ chức bố cục, xác định các thành phần HTML cần có, định hướng tổ chức CSS và tạo mã nguồn giao diện ban đầu. Em cũng sử dụng AI để giải thích các kỹ thuật trong mã nguồn và gợi ý những nội dung cần kiểm tra khi chạy trang web. Trong quá trình thực hiện em chủ động kết hợp khảo sát website Hasaki, đối chiếu các nhận xét do AI đưa ra với giao diện thực tế, lựa chọn hướng cải tiến giỏ hàng và điều chỉnh CSS sau khi phát hiện vấn đề hiển thị khi cuộn trên máy tính bảng.
## 3. Prompt đã sử dụng
Prompt 1 - Phân tích giao diện website tham khảo

Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng cho website thương mại điện tử.
Tôi đang khảo sát websiteHasaki Việt Nam: https://hasaki.vn/
Hãy giúp tôi lập bảng phân tích các khu vực:
Trang chủ.
Danh mục sản phẩm.
Chi tiết sản phẩm.
Tìm kiểm.
Giỏ hàng.
Với mỗi khu vực, hãy nêu:
Mục đích của chức năng.
Thành phần giao diện cần có.
Điểm thuận tiện đối với khách hàng.
Một vấn đề có thể phát sinh.
Một đề xuất cải tiến.
Không khẳng định những tính năng chưa được kiểm chứng.
Phân biệt rõ nhận xét dựa trên quan sát và đề xuất của AI.

Prompt 2 - Đề xuất phương án thiết kế giỏ hàng

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

Prompt 3 - Tạo mã nguồn giao diện HTML5/CSS3

Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện
thương mại điện tử bằng HTML5 và CSS3.
Yêu cầu:
· Giao diện có tiêu đề và khu vực sản phẩm.
· Có tối thiểu 4 sản phẩm mẫu.
· Mỗi sản phẩm có hình ảnh, tên, giá và nút thao tác.
· Bố cục phù hợp với màn hình máy tính và điện thoại.
· Mã HTML có cấu trúc rõ ràng.
· CSS được tách thành file riêng.
· Không sử dụng backend hoặc cơ sở dữ liệu.
· Không đưa thư viện hoặc thành phần không cần thiết vào dự án.
Giải thích cách chạy trang web và những phần tôi cần kiểm tra.
## 4. Kết quả AI đề xuất
Prompt 1:

AI hỗ trợ em nhận xét về 5 khu vực của Hasaki gồm trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng. Nội dung phân tích tập trung vào mục đích, chức năng, thành phần giao diện, điểm thuận tiện, vấn đề có thể phát sinh và đề xuất cải tiến.

AI đưa ra ba hướng có thể lựa chọn để cải tiến:
- Bộ lọc tại trang danh mục sản phẩm.
- Hộp tìm kiếm và chức năng gợi ý nhanh.
- Bố cục và chức năng hỗ trợ lựa chọn sản phẩm tại giỏ hàng.
Sau khi xem xét các hướng đề xuất và đối chiếu với website thực tế, em lựa chọn cải tiến giỏ hàng.

Prompt 2:

AI đề xuất bố cục gồm danh sách sản phẩm và khối tóm tắt hóa đơn. Các thành phần được đề xuất bao gồm checkbox chọn sản phẩm, khu vực nhập voucher, thông tin tạm tính, phí vận chuyển, giảm giá và tổng cộng, cùng nút tiến hành đặt hàng. AI gợi ý sử dụng các thẻ HTML5 có ý nghĩa ngữ nghĩa, CSS Grid và Flexbox để tổ chức bố cục, position: sticky để giữ khối hóa đơn trong tầm nhìn khi cuộn ở màn hình phù hợp, và Media Queries để điều chỉnh giao diện trên các thiết bị khác nhau.

Prompt 3:

AI hỗ trợ tạo mã nguồn giao diện minh họa, tách phần cấu trúc HTML và phần trình bày CSS thành hai file riêng. Giao diện gồm 4 sản phẩm mẫu, checkbox chọn sản phẩm, tùy chọn chọn tất cả, khu vực voucher, phần tóm tắt hóa đơn, nút tiến hành đặt hàng và khu vực sản phẩm gợi ý.
## 5. Kiểm tra và điều chỉnh kết quả AI
Em kiểm tra lại những nhận xét do AI đề xuất bằng cách đối chiếu với quá trình khảo sát trực tiếp website Hasaki.vn. Em nhận thấy một số vấn đề tương đối phù hợp như là  trang chủ có nhiều khối nội dung nối tiếp nhau và khu vực bộ lọc danh mục có nhiều thuộc tính. Nhưng em cũng nhận thấy một số nhận xét cần được điều chỉnh. Khu vực tìm kiếm của Hasaki đã có gợi ý từ khóa và sản phẩm kèm hình ảnh, giá, đồng thời hỗ trợ tìm kiếm bằng từ khóa không dấu. Trang chi tiết sản phẩm cũng đã có thanh tóm tắt sản phẩm khi cuộn trang. Nên em đã không lựa chọn hai khu vực này làm trọng tâm cải tiến.

Em quyết định tập trung vào giỏ hàng vì muốn bổ sung hai thành phần: checkbox để lựa chọn những sản phẩm muốn thanh toán và ô nhập mã giảm giá trực tiếp tại khu vực giỏ hàng. Hai thành phần này cũng phù hợp với phạm vi bài tập giao diện bằng HTML5 và CSS3. Trong quá trình kiểm tra giao diện, em phát hiện khối tóm tắt hóa đơn sử dụng position: sticky chưa phù hợp khi hiển thị và cuộn trên màn hình máy tính bảng. Em đã điều chỉnh CSS bằng cách chuyển bố cục giỏ hàng sang một cột và đưa khối tóm tắt hóa đơn về position: static ở kích thước màn hình phù hợp. Cách điều chỉnh này giúp hạn chế vấn đề cuộn và tránh việc khối hóa đơn bị cố định không phù hợp trên màn hình nhỏ hơn.
## 6. Những kiến thức em hiểu và có thể giải thích từ mã nguồn HTML/CSS
Cấu trúc HTML5

Em hiểu HTML5 được sử dụng để tổ chức cấu trúc và nội dung của trang web. Trong giao diện, em sử dụng các thẻ như:

- header: Khu vực đầu trang, chứa những thành phần nhận diện và điều hướng.
- main: Khu vực nội dung chính của trang.
- section: Chia nội dung thành các khu vực theo mục đích.
- article: Tổ chức nội dung độc lập, chẳng hạn từng sản phẩm trong danh sách.
- aside: Chứa nội dung bổ trợ như khối tóm tắt hóa đơn hoặc sản phẩm gợi ý.
- footer: Khu vực cuối trang.

CSS

Em sử dụng CSS3 để định dạng màu sắc, kiểu chữ, khoảng cách và bố cục giao diện. Các biến CSS được khai báo trong :root giúp quản lý những giá trị dùng chung như màu sắc, thuận tiện khi cần điều chỉnh thiết kế. Flexbox được dùng để sắp xếp và căn chỉnh các thành phần, còn CSS Grid giúp tổ chức bố cục giữa danh sách sản phẩm và khối hóa đơn.

Để giao diện thích ứng với nhiều kích thước màn hình, em sử dụng Responsive Design kết hợp với Media Queries tại các mốc 1200px, 900px và 600px. Các quy tắc này giúp điều chỉnh bố cục giỏ hàng, thanh điều hướng và thông tin sản phẩm khi xem trên máy tính bảng hoặc điện thoại. Còn :hover và transition tạo hiệu ứng phản hồi trực quan khi người dùng di chuyển con trỏ lên một số thành phần.

Em cũng sử dụng position: sticky cho khối hóa đơn nhằm giúp người dùng dễ theo dõi chi phí khi cuộn trang. Tuy nhiên, khi thay đổi kích thước màn hình, em điều chỉnh khối này về position: static tại các breakpoint phù hợp để tránh bố cục chưa thuận tiện trên thiết bị nhỏ. 
