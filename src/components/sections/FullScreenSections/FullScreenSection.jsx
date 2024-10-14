/* eslint-disable react/prop-types */
import FullScreenCard from "./FullScreenCard";

const FullScreenSection = ({ sections }) => {
  return (
    <div className="relative w-full">
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`w-full h-screen sticky top-0 bg-white flex justify-center items-center`}
          style={{
            zIndex: index + 1, // Each section gets a higher z-index as you scroll down
          }}
        >
          <FullScreenCard
            backgroundImage={section.backgroundImage}
            heading={section.heading}
            buttonText={section.buttonText}
            onButtonClick={section.onButtonClick}
          />
        </section>
      ))}
    </div>
  );
};

export default FullScreenSection;
