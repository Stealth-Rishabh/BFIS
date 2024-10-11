/* eslint-disable react/prop-types */
import FullScreenCard from "./FullScreenCard";

const FullScreenSection = ({ sections }) => {
  return (
    <div className="relative w-full">
      {sections.map((section) => (
        <section
          key={section.id}
          className={`w-full h-screen lg:sticky lg:top-0 bg-white flex justify-center items-center`}
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
