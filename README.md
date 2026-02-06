# Web_shop_Sports

Cấu trúc Thư mục Toàn diện (Enterprise Architecture):

src/
├── assets/                  # Tài nguyên tĩnh
│   ├── images/              # Logo, banners, placeholder
│   ├── icons/               # SVG icons, favicon
│   └── videos/              # Video review sản phẩm, clip quảng bá thể thao
├── branding/                # Quy chuẩn thương hiệu (Design Tokens)
│   ├── colors.js            # Bảng màu chủ đạo (đặc trưng của hãng)
│   └── typography.js        # Định nghĩa font chữ, kích thước
├── api/                     # Cấu hình kết nối Backend
│   ├── axiosClient.js       # Cấu hình Axios (Interceptor, Token)
│   ├── productApi.js        # Gọi API lấy sản phẩm, biến thể
│   ├── orderApi.js          # Gọi API đặt hàng, thanh toán
│   └── userApi.js           # API thông tin cá nhân, lịch sử tập luyện
├── components/              # Các thành phần giao diện tái sử dụng
│   ├── common/              # Thành phần nguyên tử (Atomic)
│   │   ├── Button/          # Custom Button (Primary, Secondary, Outline)
│   │   ├── Input/           # Input field, Checkbox, Radio cho đồ thể thao
│   │   ├── Modal/           # Cửa sổ thông báo, pop-up chọn size
│   │   └── Badge/           # Nhãn "Hot Deal", "New", "Out of Stock"
│   ├── layout/              # Khung giao diện
│   │   ├── Header/          # Thanh menu điều hướng, Search bar
│   │   ├── Footer/          # Thông tin liên hệ, chính sách đổi trả
│   │   └── Sidebar/         # Bộ lọc bên trái (Filter theo môn thể thao)
│   ├── features/            # Các component phức tạp theo tính năng
│   │   ├── auth/            # Login, Register, Social Login (Google/FB)
│   │   ├── cart/            # Drawer giỏ hàng, Mini-cart, tính tổng tiền
│   │   ├── checkout/        # Stepper thanh toán (Ship -> Pay -> Confirm)
│   │   ├── product-detail/  # Ảnh 360, Zoom, Review khách hàng, Related products
│   │   ├── wishlist/        # Danh sách sản phẩm yêu thích
│   │   └── comparison/      # Bảng so sánh thông số (vd: Giày chạy bộ vs Giày tập gym)
│   └── feedback/            # Thông báo cho người dùng
│       ├── Skeleton/        # Hiệu ứng chờ tải trang
│       └── Toast/           # Thông báo nhanh (Thêm vào giỏ thành công)
├── constants/               # Các hằng số dùng chung
│   ├── storageKeys.js       # Tên biến lưu LocalStorage
│   └── common.js            # Các giá trị cố định (Size giày: 38-44, vv.)
├── contexts/                # Quản lý trạng thái bằng Context API
│   ├── AuthContext.jsx      # Quản lý đăng nhập/phân quyền
│   ├── CartContext.jsx      # Quản lý giỏ hàng toàn trang
│   └── ThemeContext.jsx     # Chế độ Dark/Light mode
├── hooks/                   # Các Custom Hooks tự viết
│   ├── useDebounce.js       # Tối ưu hóa tìm kiếm sản phẩm (Search)
│   ├── useLocalStorage.js   # Lưu dữ liệu người dùng tự động
│   └── useProductFilter.js  # Logic lọc sản phẩm phức tạp
├── i18n/                    # Đa ngôn ngữ (Ví dụ: Tiếng Việt, Tiếng Anh)
│   ├── vi.json
│   └── en.json
├── layouts/                 # Các kiểu bố cục trang khác nhau
│   ├── MainLayout.jsx       # Layout có Header/Footer
│   ├── AuthLayout.jsx       # Layout riêng cho trang Đăng nhập
│   └── AdminLayout.jsx      # Layout cho trang quản trị (Dashboard)
├── pages/                   # Các màn hình chính (Tương ứng mỗi Route)
│   ├── Home/                # Trang chủ (Banners, Trending, New Arrivals)
│   ├── Shop/                # Trang danh sách tất cả sản phẩm
│   ├── ProductDetail/       # Trang chi tiết một sản phẩm
│   ├── Cart/                # Trang giỏ hàng chi tiết
│   ├── Checkout/            # Trang thực hiện thanh toán
│   ├── Profile/             # Trang cá nhân (Thông tin, Đơn hàng của tôi)
│   ├── StoreLocator/        # Trang tìm kiếm hệ thống cửa hàng vật lý
│   └── NotFound/            # Trang lỗi 404
├── routes/                  # Quản lý định tuyến (Navigation)
│   ├── AppRoutes.jsx        # File tổng hợp tất cả đường dẫn
│   ├── PrivateRoute.jsx     # Route bảo vệ (Phải đăng nhập mới xem được)
│   └── PublicRoute.jsx      # Route công khai
├── services/                # Logic xử lý nghiệp vụ phức tạp
│   ├── paymentService.js    # Xử lý Stripe, PayPal, MoMo, VNPay
│   └── authService.js       # Xử lý Token (Access Token, Refresh Token)
├── styles/                  # Toàn bộ CSS/SASS/Tailwind
│   ├── global.css           # Style dùng chung cho toàn bộ web
│   ├── variables.scss       # Biến màu sắc, khoảng cách
│   └── mixins.scss          # Các hàm xử lý CSS nhanh
├── utils/                   # Hàm tiện ích (Helper functions)
│   ├── formatCurrency.js    # Hàm định dạng tiền (vd: 1.000.000đ)
│   ├── formatDate.js        # Định dạng ngày mua hàng
│   └── validation.js        # Kiểm tra dữ liệu Form (Email, Password)
├── store/                   # (Nếu dùng Redux/Zustand) Quản lý State lớn
│   ├── slices/              # Chia nhỏ State (userSlice, cartSlice)
│   └── index.js             # File cấu hình Store trung tâm
├── .env                     # Lưu biến môi trường (URL Backend, API Key)
├── main.jsx                 # Điểm khởi đầu của ứng dụng
└── App.jsx                  # Nơi bọc các Provider và Routes
