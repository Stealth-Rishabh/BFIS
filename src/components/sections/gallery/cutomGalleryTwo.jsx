/* eslint-disable react/prop-types */
import Marquee from "../../ui/marquee";

const images = [
  "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
  "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
  "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
  "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
  "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
  "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
];

const firstRowImages = images.slice(0, images.length / 2);
const secondRowImages = images.slice(images.length / 2);

const ImageCard = ({ imageSrc, altText }) => {
  return (
    <div className="relative w-64 h-40 cursor-pointer overflow-hidden rounded-xl">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export function GalleryTwo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden pb-16 bg-red-600">
      <h2 className="text-white text-4xl font-bold text-center mb-8 sm:mt-12 font-playfair">
        What&apos;s Happenings
      </h2>
      {/* Top Marquee */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRowImages.map((image, index) => (
          <ImageCard
            key={`top-${index}`}
            imageSrc={image}
            altText={`Gallery Image ${index + 1}`}
          />
        ))}
      </Marquee>

      {/* Bottom Marquee with reverse */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRowImages.map((image, index) => (
          <ImageCard
            key={`bottom-${index}`}
            imageSrc={image}
            altText={`Gallery Image ${index + 1}`}
          />
        ))}
      </Marquee>

      {/* Gradients for fade effect */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}

export default GalleryTwo;
