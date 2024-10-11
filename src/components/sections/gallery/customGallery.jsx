const Gallery = () => {
  const images = [
    "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    "https://www.bfis.in/wp-content/uploads/2024/09/IMG_5100-1536x825.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      <h2 className="text-center text-2xl font-bold mb-8 text-purple-800">
        Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Top row */}
        <div className="md:col-span-1">
          <img
            src={images[0]}
            alt="Gallery Image 1"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:row-span-2 md:col-span-1 relative">
          <img
            src={images[1]}
            alt="Gallery Image 2"
            className="md:absolute md:inset-0 w-full md:h-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-1">
          <img
            src={images[2]}
            alt="Gallery Image 3"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Bottom row */}
        <div className="md:col-span-1">
          <img
            src={images[3]}
            alt="Gallery Image 4"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-1">
          <img
            src={images[4]}
            alt="Gallery Image 5"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
