import { useState } from "react";

const SchoolComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "No.1",
      description: "A Happy, Compassionate, and Inclusive Community",
      content: `We know that children who feel healthy, happy and safe perform at their best. Thus, from the moment a child joins us, our experienced staff ensure that they quickly settle in and start to enjoy the wonderfully rich and inspiring educational environment that is uniquely ours.
    
At Brookfield, we all share a passion for learning and its capacity to transform lives; we encourage and inspire our students to be the best they can be and prepare them for a happy, successful and a meaningful life. A life that will inspire the world. English, Hindi, Sanskrit, Social Studies, General Science, German, French, Physics, Chemistry, Biology, Mathematics, History, Geography, Economics, Commerce, Accountancy, Environmental Science, Bio-Technology, Computer Science, Political Science, Physical Education, Athletics, Gymnastics, Boxing, Art, Music (Western & Classical), Dance, Yoga, and meditation.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img1.jpg",
    },
    {
      title: "No.2",
      description: "A Sincere, Determined and Academically Driven Community",
      content: `Academic life at Brookfield focuses on developing intellectually curious, independent-minded young adults who are well equipped for dynamic and fulfilling lives beyond school.

We know that the attitudes, intellectual habits and work ethic one develops at school stay with them for life. That’s why our students are encouraged to question received wisdoms, to think deeply and to interrogate new ideas across a broad range of academic disciplines.

The increasing ease of access to information means that educators today have a more important role than ever in teaching the traditional skills of evaluation, discernment and analysis.

At Brookfield, we follow the CBSE curriculum for our school but in our own unique way. Our approach is designed to take the children away from the boredom of their classroom learning while introducing them to a new world of imaginations, creativity, experiences, and experiments. The approach of the real-world curriculum at the school is based on problems, projects, and questions versus the traditional curriculum approach of discipline, skills, and facts.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img2.jpg",
    },
    {
      title: "No.3",
      description: "A Curious, Creative, and Passionate Community",
      content: `Performing arts is quite simply a way of life at Brookfield. For any student with a passion for music, drama, dance in any form – whether contemporary or classical – we offer boundless inspiration, opportunity and encouragement. We celebrate and support individual excellence and mass participation – catering to the ambitions and abilities of all students. We offer trained guidance to all interested students.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img3.jpg",
    },
    {
      title: "No.4",
      description: "A Hard-Working, Courageous, and Proud Community",
      content: `From playing for fun to aspiring to play for the gold; all our students experience a broad range of sports in exceptional facilities. We are driven by values, not results. We know that if you get your culture right, the results will follow. Our coaches and trainers are professional athletes and understand what it takes to perform at the highest level. They assist students at all levels to advance their abilities, as well as nurturing elite performers through focused training programmes – giving them every opportunity to excel. For students who wish to compete in their chosen sports, there are ample opportunities to represent Brookfield.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img4.jpg",
    },
    {
      title: "No.5",
      description: "The Widest Choice of Courses",
      content: `English, Hindi, Sanskrit, Social Studies, General Science, German, French, Physics, Chemistry, Biology, Mathematics, History, Geography, Economics, Commerce, Accountancy, Environmental Science, Bio- Technology, Computer Science, Political Science Physical Education, Athletics, Gymnastics, Boxing Art, Music (Western & Classical) & Dance Yoga and meditation.`,
      image: "https://www.bfis.in/info/admissions/images/Twin-img5.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-newRed text-white p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-5xl font-bold">
          Brookfield International School
        </h2>
        <h4 className="text-lg lg:text-xl mt-2">
          Where Curious Minds Become Compassionate & Confident Leaders
        </h4>
      </div>

      <div className="flex flex-col lg:flex-row bg-schoolgrey rounded-xl shadow-lg overflow-hidden sm:max-h-[485px] max-w-6xl w-full">
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
      </div>
    </div>
  );
};

export default SchoolComponent;
