import { useState } from "react";
import { motion } from "framer-motion";

const SchoolComponent = () => {
  const [activeTab, setActiveTab] = useState(null); // Default to no active tab

  const tabs = [
    {
      title: "No.1",
      description: "Happy, Compassionate, and Inclusive Community",
      content: `We know that children who feel healthy, happy and safe perform at their best. Thus, from the moment a child joins us, our experienced staff ensure that they quickly settle in and start to enjoy the wonderfully rich and inspiring educational environment that is uniquely ours.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img1.jpg",
    },
    {
      title: "No.2",
      description: "Sincere, Determined and Academically Driven Community",
      content: `Academic life at Brookfield focuses on developing intellectually curious, independent-minded young adults who are well equipped for dynamic and fulfilling lives beyond school.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img2.jpg",
    },
    {
      title: "No.3",
      description: "Curious, Creative, and Passionate Community",
      content: `Performing arts is quite simply a way of life at Brookfield. For any student with a passion for music, drama, or dance in any form – whether contemporary or classical – we offer boundless inspiration and encouragement.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img3.jpg",
    },
    {
      title: "No.4",
      description: "Hard-Working, Courageous, and Proud Community",
      content: `From playing for fun to aspiring to play for the gold; all our students experience a broad range of sports in exceptional facilities. We are driven by values, not results.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img4.jpg",
    },
    {
      title: "No.5",
      description: "The Widest Choice of Courses",
      content: `We offer a wide range of courses including languages, sciences, arts, and sports to encourage diverse interests and passions.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img5.jpg",
    },
  ];

  const handleTabClick = (index) => {
    // Toggle the active tab. If the same tab is clicked, close it.
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-red-600 py-16 text-white p-4 sm:p-8 overflow-x-hidden">
      {/* Heading and Subheading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-5xl font-bold font-playfair">
          Brookfield International School
        </h2>
        <h4 className="text-lg lg:text-xl mt-2">
          Where Curious Minds Become Compassionate & Confident Leaders
        </h4>
      </div>

      {/* For Large Screens (Original Design) */}
      <div className="hidden lg:flex lg:flex-row bg-schoolgrey rounded-xl shadow-lg overflow-hidden max-w-6xl w-full">
        <div className="flex-none w-full lg:w-1/4 bg-schoolgrey">
          {tabs.map((tab, index) => (
            <div
              key={`tab-${index}`} // Ensure unique keys
              className={`p-4 border-b cursor-pointer transition-all duration-300 ${
                activeTab === index
                  ? "bg-gray-700 text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
              onClick={() => handleTabClick(index)}
            >
              <h3 className="font-semibold text-lg">{tab.title}</h3>
              <p className="text-sm">{tab.description}</p>
            </div>
          ))}
        </div>

        <div className="flex-grow lg:w-1/3 p-6 lg:p-16 bg-schoolgrey text-white">
          {activeTab !== null && (
            <>
              <h3 className="font-bold mb-4 text-xl text-white">
                {tabs[activeTab].description}
              </h3>
              <p className="text-slate-300 whitespace-pre-line">
                {tabs[activeTab].content}
              </p>
            </>
          )}
        </div>

        <div className="flex-none w-full lg:w-1/3">
          {activeTab !== null && (
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>

      {/* For Mobile and Tablet (Accordion Design) */}
      <div className="lg:hidden w-full max-w-2xl mx-auto mt-8">
        {tabs.map((tab, index) => (
          <div
            key={`mobile-tab-${index}`} // Ensure unique keys
            className={`border rounded-lg mb-4 overflow-hidden ${
              activeTab === index
                ? "bg-gray-700 text-white"
                : "bg-white text-black"
            }`}
          >
            {/* Tab Title */}
            <div
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => handleTabClick(index)}
            >
              <h3 className="font-semibold text-lg">{tab.title}</h3>
              <p className="text-sm">{tab.description}</p>
            </div>

            {/* Content (Only visible if activeTab matches the current index) */}
            {activeTab === index && (
              <motion.div
                className="p-4 bg-gray-800 text-white rounded-b-lg"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="font-bold mb-2 text-xl">{tab.description}</h3>
                  <p className="text-slate-300 whitespace-pre-line mb-4">
                    {tab.content}
                  </p>
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="object-cover w-full h-auto rounded-lg"
                  />
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolComponent;
