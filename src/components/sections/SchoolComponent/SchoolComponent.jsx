import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SchoolComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "No.1",
      description: "A Happy, Compassionate, and Inclusive Community",
      content: `We know that children who feel healthy, happy and safe perform at their best. Thus, from the moment a child joins us, our experienced staff ensure that they quickly settle in and start to enjoy the wonderfully rich and inspiring educational environment that is uniquely ours.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img1.jpg",
    },
    {
      title: "No.2",
      description: "A Sincere, Determined and Academically Driven Community",
      content: `Academic life at Brookfield focuses on developing intellectually curious, independent-minded young adults who are well equipped for dynamic and fulfilling lives beyond school.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img2.jpg",
    },
    {
      title: "No.3",
      description: "A Curious, Creative, and Passionate Community",
      content: `Performing arts is quite simply a way of life at Brookfield. For any student with a passion for music, drama, or dance in any form – whether contemporary or classical – we offer boundless inspiration and encouragement.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img3.jpg",
    },
    {
      title: "No.4",
      description: "A Hard-Working, Courageous, and Proud Community",
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

  // Ref for observation
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false });
  const isContentInView = useInView(contentRef, { once: false });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-newRed text-white p-8 overflow-hidden">
      {/* Heading and Subheading Section */}
      <motion.div
        className="text-center mb-8"
        ref={headingRef}
        initial={{ x: "-100%", opacity: 0 }} // Slide from left
        animate={isHeadingInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ type: "spring", stiffness: 60, delay: 0.2 }} // Spring transition
      >
        <h2 className="text-3xl lg:text-5xl font-bold">
          Brookfield International School
        </h2>
        <h4 className="text-lg lg:text-xl mt-2">
          Where Curious Minds Become Compassionate & Confident Leaders
        </h4>
      </motion.div>

      {/* Tabbed Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row bg-schoolgrey rounded-xl shadow-lg overflow-hidden sm:max-h-[485px] max-w-6xl w-full"
        ref={contentRef}
        initial={{ x: "100%", opacity: 0 }} // Slide from right
        animate={isContentInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ type: "spring", stiffness: 60, delay: 0.4 }} // Spring transition
      >
        {/* Left Side Tabs */}
        <div className="flex-none w-full lg:w-1/4 bg-schoolgrey">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`p-4 border-b cursor-pointer ${
                activeTab === index
                  ? "bg-schoolgrey text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <h3
                className={`font-semibold text-lg ${
                  activeTab === index ? "text-white" : "text-gray-800"
                }`}
              >
                {tab.title}
              </h3>
              <p
                className={`text-sm ${
                  activeTab === index ? "text-slate-300" : "text-black"
                }`}
              >
                {tab.description}
              </p>
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div className="flex-grow lg:w-1/3 p-6 lg:p-16 bg-schoolgrey text-white overflow-y-auto custom-scrollbar">
          <h3 className="font-bold mb-4 text-xl text-white">
            {tabs[activeTab].description}
          </h3>
          <p className="text-slate-300 whitespace-pre-line">
            {tabs[activeTab].content}
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex-none w-full lg:w-1/3">
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SchoolComponent;
