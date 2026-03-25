const ProductGallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img 
          key={index} 
          src={`${import.meta.env.VITE_API_URL_IMAGE}${img.path}`} 
          alt="Chi tiết giày" 
        />
      ))}
    </div>
  );
};