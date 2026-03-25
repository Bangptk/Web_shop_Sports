const ProductCard = ({ product }) => {
  // Nối URL Backend với path ảnh từ MySQL
  // Ví dụ: http://localhost:5000 + /images/nike-zoom.jpg
  const imageUrl = `${import.meta.env.VITE_API_URL_IMAGE}${product.thumbnail}`;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.name} />
      {/* ... các thành phần khác */}
    </div>
  );
};