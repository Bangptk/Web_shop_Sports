# Web_shop_Sports
Website thương mại điện tử bán đồ thể thao - Nhóm 3 - Học phần Phát triển ứng dụng J2EE

## Cấu trúc Thư mục Toàn diện (Enterprise Architecture):
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


## Yêu cầu hệ thống
Trước khi bắt đầu, đảm bảo máy của bạn đã cài đặt:
- Node.js: >= 18.x (LTS recommended)
- npm: >= 9.x hoặc yarn: >= 1.22.x
- Git: >= 2.x
- Code Editor: VS Code (recommended) với extensions:
    + ESLint
    + Prettier
    + ES7+ React/Redux/React-Native snippets
    + Tailwind CSS IntelliSense (nếu dùng Tailwind)

## Kiểm tra phiên bản
`node --version`    # v18.x.x hoặc cao hơn

`npm --version`     # 9.x.x hoặc cao hơn

`git --version`     # 2.x.x hoặc cao hơn

## Cài đặt
1. Clone repository
- Clone qua HTTPS:  `git clone https://github.com/Bangptk/Web_shop_Sports.git`
- hoặc qua SSH:     `git clone https://github.com/Bangptk/Web_shop_Sports.git`
- Di chuyển vào thư mục dự án:  `cd Web_shop_Sports`

2. Cài đặt dependencies (Frontend)
- Di chuyển vào thư mục frontend:   `cd frontend`
- Cài đặt packages với npm:         `npm install`
- hoặc với yarn:                    `yarn install`

3. Cấu hình Environment Variables
- Copy file .env.example:       `cp .env.example .env`
- Mở và chỉnh sửa file .env:    `nano .env` hoặc `code .env`

## File .env mẫu
1. API Configuration
    `VITE_API_BASE_URL=http://localhost:3000/api`
    `VITE_API_TIMEOUT=10000`

2. App Configuration
    `VITE_APP_NAME=Web_shop_Sports`
    `VITE_APP_VERSION=1.0.0`

3. Features
    `VITE_ENABLE_AI_ASSISTANT=true`
    `VITE_ENABLE_CHATBOT=false`

4. Analytics (optional)
    `VITE_GA_TRACKING_ID=`

5. Other
    `NODE_ENV=development`

## Chạy dự án
1. Development Mode:
- Từ thư mục frontend:  `npm run dev`
                        Server sẽ chạy tại: http://localhost:5173/
2. Production Build:
- Build cho production:         `npm run build`
- Preview production build:     `npm run preview`
- Build output sẽ ở thư mục:    frontend/dist/


## Lint & Format
1. Kiểm tra lỗi ESLint:         `npm run lint`
2. Fix lỗi ESLint tự động:      `npm run lint:fix`
3. Format code với Prettier:    `npm run format`


## Scripts có sẵn (Mô tả)
- `npm run dev`          Chạy dev server với HMR
- `npm run build`        Build production bundle
- `npm run preview`      Preview production build
- `npm run lint`         Kiểm tra code với ESLint
- `npm run lint:fix`     Fix lỗi ESLint tự động
- `npm run format`       Format code với Prettier
- `npm test`              Chạy unit tests (nếu có)

## Workflow phát triển (Git Branching Strategy)
main          (production-ready code)
  <--
develop       (integration branch)
  <--
feature/*     (feature branches)

## Quy trình làm việc
1. Tạo feature branch:
- Luôn bắt đầu từ develop:        `git checkout develop`
                                  `git pull origin develop`
- Tạo feature branch mới:         `git checkout -b feature/ten-tinh-nang`

2. Development:
- Code your feature...
- Commit thường xuyên với message rõ ràng:
    `git add .`
    `git commit -m "feat: implement product gallery component"`

3. Push lên remote:
            `git push -u origin feature/ten-tinh-nang`

4. Tạo Pull Request (PR):
- Vào GitHub → Chọn tab Pull requests → Nhấn New pull request.
- Base: develop ← Compare: feature/ten-tinh-nang.
- Điền thông tin:
    + Title: [Feature] Tên tính năng
    + Description: Mô tả các thay đổi (changes), đính kèm ảnh chụp màn hình (screenshots).
    + Assignees: Chọn bản thân bạn.
    + Reviewers: Chọn Team Leader.
- Nhấn Create pull request và đợi review.

5. Code Review & Merge"
- Reviewer sẽ để lại bình luận hoặc phê duyệt (approve).
- Sửa lỗi (Fix issues) nếu được yêu cầu.
- Sau khi được Approve → Thực hiện Merge pull request vào develop.
- Delete branch: Xóa branch feature sau khi đã merge thành công.

## Team (5 thành viên)
Phan Thị Khánh Băng -- Team Leader, Frontend Developer, Project structure
                    -- @Bangptk

Dương Thanh Phong   -- Frontend Developer, Backend Developer
                    -- @ThanhPhong2401

Vũ Đức Huân         -- Frontend Developer, Backend Developer

Phạm Huỳnh Tài      -- Documentation

Hồ Thái Phong       -- Documentation

## Thank you for read me!