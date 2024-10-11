import lightImg from "@/assets/images/about/light.svg";
import aboutOne from "@/assets/images/about/about1.png";
import targetImg from "@/assets/images/about/target.svg";
import { Link } from "react-router-dom";
import Title from "@/components/ui/title";
import SectionName from "@/components/ui/sectionName";
import SectionDescription from "@/components/ui/sectionDescription";
import { Button } from "@/components/ui/button";
import SlideUp from "@/lib/animations/slideUp";

const AboutNew = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          {/* Left Image Section */}
          <div className="relative">
            <SlideUp>
              <img src={aboutOne} alt="aboutOne" className="mx-auto" />
            </SlideUp>
          </div>

          {/* Right Content Section */}
          <div>
            <SectionName>About BFIS</SectionName>
            <Title size={"3.5xl"} className={"pb-5"}>
              The Place Where You Can <span className="shape-bg">Thrive</span>
            </Title>
            <SectionDescription>
              At BFIS, we provide a comprehensive learning environment that
              empowers students from 1st to 12th grade to achieve academic
              excellence, personal growth, and holistic development.
            </SectionDescription>

            <ul className="list-item space-y-6 pt-8">
              <li className="flex items-start icon_responsive icon_responsive_padding">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={lightImg}
                      alt="lightImg"
                      className="w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">Our Mission</h4>
                  <SectionDescription className="!text-base">
                    To deliver academic excellence and create inspiring places
                    for children and young people to learn and grow into
                    confident individuals.
                  </SectionDescription>
                </div>
              </li>
              <li className="flex items-start icon_responsive  icon_responsive_padding">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={targetImg}
                      alt="target"
                      className="w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">Our Vision</h4>
                  <SectionDescription className="!text-base">
                    BFIS prepare its community to be confident citizens and
                    leaders in tomorrow’s world – constantly curious, pioneering
                    and changing.
                  </SectionDescription>
                </div>
              </li>
            </ul>

            <div className="pt-8">
              {/* Updated Button with outline variant and hover effect */}
              <Button
                asChild
                variant="outline"
                className="text-foreground border-secondary"
              >
                <Link to="/about-us">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
