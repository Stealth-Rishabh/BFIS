const GalleryTwo = () => {
  const images = [
    "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-newRed mt-10">
      <h2 className="text-center text-2xl font-bold mb-8 text-white">
        Whats Happening
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="col-span-1">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryTwo;
