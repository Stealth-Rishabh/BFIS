/* eslint-disable react/prop-types */
export default function EducationalExperience() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Discover the Diverse Educational Experience at BFIS
      </h1>
      <div className="grid grid-cols-3 gap-0">
        {" "}
        {/* Removed gap between columns */}
        <div className="col-span-1 text-center">
          <ImageSection
            title="Academics"
            color="bg-purple-500"
            imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img1.png"
          />
          <TriangleConnector direction="left" />
          <ImageSection
            title="Student Life"
            color="bg-blue-500"
            imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img2.png"
          />
          <TriangleConnector direction="left" />
          <ImageSection
            title="Achievements"
            color="bg-purple-500"
            imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img1.png"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center text-center px-6 bg-slate-100 ">
          <h2 className="text-2xl font-semibold mb-4">
            One Way.
            <br />
            Our Methods.
            <br />
            Our Difference.
          </h2>
          <h3 className="text-xl font-medium mb-2">
            Holistic Education at BFIS
          </h3>
          <p className="text-sm mb-4">
            Adding that holistic perspective of the child as the core essence of
            our academic system, we provide a comprehensive learning experience
            through Academics, Events, Facilities, and more.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
        <div className="col-span-1 text-center">
          <ImageSection
            title="Extracurricular"
            color="bg-green-500"
            imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img3.png"
          />
          <TriangleConnector direction="right" />
          <ImageSection
            title="Facilities"
            color="bg-yellow-500"
            imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img4.png"
          />
          <TriangleConnector direction="right" />
          <ImageSection
            title="Events"
            color="bg-green-500"
            imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img3.png"
          />
        </div>
      </div>
    </div>
  );
}

function ImageSection({ title, color, imageSrc }) {
  return (
    <div className="relative h-40 overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className={`absolute bottom-0 left-0 right-0 ${color} p-2`}>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}

function TriangleConnector({ direction }) {
  return (
    <div
      className={`relative w-full ${
        direction === "left" ? "ml-auto" : "mr-auto"
      }`}
    >
      <div
        className={`absolute bg-slate-100 ${
          direction === "left" ? "right-0" : "left-0"
        } w-20 h-20 z-10 mt-[-2.5rem]`}
        style={{
          clipPath:
            direction === "left"
              ? "polygon(100% 0, 0 50%, 100% 100%)"
              : "polygon(100% 50%, 0 0, 0 100%)",

          WebkitClipPath:
            direction === "left"
              ? "polygon(100% 0, 0 50%, 100% 100%)"
              : "polygon(100% 50%, 0 0, 0 100%)",
        }}
      />
    </div>
  );
}
