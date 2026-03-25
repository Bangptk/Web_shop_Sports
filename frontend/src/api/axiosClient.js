// src/api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string'; // Bạn nên cài thêm: npm install query-string

const axiosClient = axios.create({
  // Sử dụng biến từ file .env đã tạo
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Tự động chuyển đổi các object thành query string (Ví dụ: {size: 42} -> ?size=42)
  paramsSerializer: (params) => queryString.stringify(params),
});

// INTERCEPTOR CHO REQUEST: Kiểm tra và đính kèm Token bảo mật
axiosClient.interceptors.request.use(async (config) => {
  // Lấy token từ localStorage (hoặc cookie nếu bạn muốn bảo mật hơn)
  const token = localStorage.getItem('access_token');
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

// INTERCEPTOR CHO RESPONSE: Xử lý dữ liệu và bắt lỗi tập trung
axiosClient.interceptors.response.use(
  (response) => {
    // Nếu có dữ liệu trả về, chúng ta chỉ lấy phần data bên trong
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // XỬ LÝ LỖI TẬP TRUNG
    const { response } = error;
    
    if (response) {
      const { status, data } = response;
      
      switch (status) {
        case 401:
          // Lỗi chưa đăng nhập hoặc token hết hạn
          console.error("Phiên đăng nhập hết hạn. Đang điều hướng...");
          localStorage.removeItem('access_token');
          // window.location.href = '/login'; // Tùy chọn: tự động đá ra trang login
          break;
        case 403:
          console.error("Bạn không có quyền truy cập mục này!");
          break;
        case 404:
          console.error("Không tìm thấy dữ liệu yêu cầu.");
          break;
        case 500:
          console.error("Lỗi Server rồi! Vui lòng thử lại sau.");
          break;
        default:
          console.error(data?.message || "Đã có lỗi xảy ra!");
      }
    } else {
      // Trường hợp mất kết nối mạng (Network Error)
      console.error("Vui lòng kiểm tra kết nối mạng của bạn.");
    }

    return Promise.reject(error);
  }
);

export default axiosClient;