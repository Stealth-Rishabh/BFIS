import { Helmet } from "react-helmet";

import HeroVideo from "@/components/sections/heros/heroVideo";
import SchoolComponent from "@/components/sections/SchoolComponent/SchoolComponent";
import StudentResults from "@/components/sections/SchoolComponent/StudentResults";
import Gallery from "@/components/sections/gallery/customGallery";
import GalleryTwo from "@/components/sections/gallery/cutomGalleryTwo";
import PicLayout from "@/components/sections/picLayout/picLayout";
import FullscreenSections from "@/components/sections/FullScreenSections/FullScreenSection";
import EducationalExperience from "@/components/sections/SchoolComponent/EducationalExperience";

const sectionsData = [
  {
    id: "section-1",
    backgroundImage: "https://www.hw.com/portals/0/stackedcards/makenew-4.jpg",
    heading: "Make New Friends",
    buttonText: "Meet Our Community",
    onButtonClick: () => alert("Meet Our Community clicked"),
  },
  {
    id: "section-2",
    backgroundImage:
      "https://www.hw.com/portals/0/stackedcards/learnwhat-1.jpg",
    heading: "Learn What You Love",
    buttonText: "Dive In",
    onButtonClick: () => alert("Dive In clicked"),
  },
  {
    id: "section-3",
    backgroundImage:
      "https://www.hw.com/portals/0/stackedcards/followyour-1.jpg",
    heading: "Slide3",
    buttonText: "Slide In",
    onButtonClick: () => alert("Dive In clicked"),
  },
  {
    id: "section-1",
    backgroundImage: "https://www.hw.com/portals/0/stackedcards/makenew-4.jpg",
    heading: "Make New Friends",
    buttonText: "Meet Our Community",
    onButtonClick: () => alert("Meet Our Community clicked"),
  },
  {
    id: "section-2",
    backgroundImage:
      "https://www.hw.com/portals/0/stackedcards/learnwhat-1.jpg",
    heading: "Learn What You Love",
    buttonText: "Dive In",
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
      <SchoolComponent />
      <StudentResults />
      <FullscreenSections sections={sectionsData} />
      <PicLayout />
      <EducationalExperience />
      <GalleryTwo />
      <Gallery />
    </>
  );
};

export default HomeOne;
