// src/utils/formatImage.js
export const getFullImageUrl = (path) => {
  if (!path) return '/assets/images/placeholder-shoe.png'; // Ảnh mặc định nếu lỗi
  return `${import.meta.env.VITE_API_URL_IMAGE}${path}`;
};