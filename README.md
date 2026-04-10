# Web_shop_Sports
Website thương mại điện tử bán đồ thể thao - Nhóm 3 - Học phần Phát triển ứng dụng J2EE

## Cấu trúc Thư mục Toàn diện (Enterprise Architecture):

Web_shop_Sports/
├── frontend/                # ReactJS + Vite (Giao diện người dùng)
├── backend/                 # NodeJS + Express (Xử lý logic & API)
└── database/                # Lưu trữ các file thiết kế DB (.sql, diagram)

frontend/
├── src/
│   ├── assets/              # Tài nguyên tĩnh (Images, Icons, Videos)
│   ├── branding/            # Design Tokens (colors.js, typography.js)
│   ├── api/                 # Kết nối API (axiosClient, productApi, userApi)
│   ├── components/          # Components tái sử dụng
│   │   ├── common/          # Atomic (Button, Input, Modal, Badge)
│   │   ├── layout/          # Header, Footer, Sidebar
│   │   ├── features/        # Auth, Cart, Checkout, Product-Detail, Wishlist
│   │   └── feedback/        # Skeleton, Toast
│   ├── constants/           # storageKeys.js, common.js
│   ├── contexts/            # AuthContext, CartContext, ThemeContext
│   ├── hooks/               # useDebounce, useLocalStorage, useProductFilter
│   ├── i18n/                # Đa ngôn ngữ (vi.json, en.json)
│   ├── layouts/             # MainLayout, AuthLayout, AdminLayout
│   ├── pages/               # Home, Shop, ProductDetail, Cart, Checkout, Profile...
│   ├── routes/              # AppRoutes, PrivateRoute, PublicRoute
│   ├── services/            # paymentService, authService
│   ├── styles/              # global.css, variables.scss
│   ├── utils/               # formatCurrency, formatDate, validation
│   ├── store/               # Redux Slices (nếu có)
│   ├── App.jsx              # App Root
│   └── main.jsx             # Entry Point
├── .env                     # Lưu VITE_API_URL=http://localhost:5000/api
├── tailwind.config.js       # Nếu dùng Tailwind
└── package.json

backend/
├── src/
│   ├── configs/             # Cấu hình DB (MySQL), Cloudinary, Passport
│   ├── controllers/         # Nhận Request và trả về Response (JSON)
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── services/            # Logic nghiệp vụ (Tính toán thuế, giảm giá, check kho)
│   │   ├── productService.js
│   │   └── paymentService.js
│   ├── models/              # Truy vấn MySQL (Dùng Sequelize hoặc Query thuần)
│   │   ├── Product.js
│   │   ├── User.js
│   │   └── Order.js
│   ├── routes/              # Khai báo các đường dẫn API
│   │   ├── index.js         # Router tổng
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── middlewares/         # Kiểm tra quyền (authMiddleware, errorMiddleware)
│   └── utils/               # jwtHelper.js, sendEmail.js
├── .env                     # Lưu DB_HOST, DB_USER, JWT_SECRET, PORT
├── server.js                # Điểm khởi chạy Server (Entry Point)
└── package.json

database/
├── migrations/              # Các file tạo bảng (Create tables)
│   ├── 01_create_users.sql
│   ├── 02_create_products.sql
│   ├── 03_create_variants.sql
│   └── 04_create_orders.sql
├── seeds/                   # Dữ liệu mẫu ban đầu để test
│   └── sample_products.sql
└── erd_diagram.png          # Ảnh sơ đồ quan hệ giữa các bảng

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
- Di chuyển vào thư mục frontend/backend:   `cd frontend` `cd backtend`
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

## Team (1 thành viên)
Phan Thị Khánh Băng -- Fullstack Developer, Project structure, Documentation
                    -- @KhanhBang2610

## Thank you for read me!
