import { Helmet } from "react-helmet";

import HeroVideo from "@/components/sections/heros/heroVideo";
import StudentProfileCarousel from "@/components/sections/SchoolComponent/SchoolComponent";

import Gallery from "@/components/sections/gallery/customGallery";
import GalleryTwo from "@/components/sections/gallery/cutomGalleryTwo";
import PicLayout from "@/components/sections/picLayout/picLayout";
import FullscreenSections from "@/components/sections/FullScreenSections/FullScreenSection";
import EducationalExperience from "@/components/sections/SchoolComponent/EducationalExperience";

import TiltedSlider from "@/components/slider/Slider";
import world from "@/assets/images/world.png";
import learn from "@/assets/images/learn.png";
import faculty from "@/assets/images/faculty.png";
import art from "@/assets/images/art.png";
import ethos from "@/assets/images/ethos.png";

const sectionsData = [
  {
    id: "section-1",
    backgroundImage: `${world}`,
    heading: "World-Class Learning",
    buttonText: "Know More",
    onButtonClick: () => alert("Meet Our Community clicked"),
  },
  {
    id: "section-2",
    backgroundImage: `${learn}`,
    heading: "Innovative E-Learning Facilities",
    buttonText: "Know More",
    onButtonClick: () => alert("Dive In clicked"),
  },
  {
    id: "section-3",
    backgroundImage: `${faculty}`,
    heading: "Experienced Faculty",
    buttonText: "Know More",
    onButtonClick: () => alert("Dive In clicked"),
  },
  {
    id: "section-1",
    backgroundImage: `${art}`,
    heading: "State-of-the-art Facilities",
    buttonText: "Know More",
    onButtonClick: () => alert("Meet Our Community clicked"),
  },
  {
    id: "section-2",
    backgroundImage: `${ethos}`,
    heading: "BFIS Values & Ethos",
    buttonText: "Know More",
    onButtonClick: () => alert("Dive In clicked"),
  },
];

const HomeOne = () => {
  return (
    <>
      <Helmet>
        <title>BFIS - Best School In North India</title>
        <meta name="description" content="BFIS - Best School In North India" />
      </Helmet>
      <HeroVideo />
      <StudentProfileCarousel />
      <TiltedSlider />

      <FullscreenSections sections={sectionsData} />
      <PicLayout />
      <EducationalExperience />
      <GalleryTwo />
      <Gallery />
    </>
  );
};

export default HomeOne;
