// src/api/productApi.js
import axiosClient from "./axiosClient";

const productApi = {
  // Lấy danh sách sản phẩm (có hỗ trợ lọc, phân trang)
  getAll: (params) => {
    const url = '/products';
    return axiosClient.get(url, { params });
  },

  // Lấy chi tiết sản phẩm kèm biến thể và ảnh từ MySQL
  getById: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  
  // Tìm kiếm sản phẩm thể thao
  search: (query) => {
    const url = `/products/search?q=${query}`;
    return axiosClient.get(url);
  }
};

export default productApi;