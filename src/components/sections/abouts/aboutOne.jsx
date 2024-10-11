import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import Title from "@/components/ui/title";
import about_img_1 from "@/assets/images/about/bfis_class.png";
import icreement from "@/assets/images/about/icreement.png";
import shap_1 from "@/assets/images/about/shap-1.png";
import customer from "@/assets/images/about/customer.png";
import { Button } from "@/components/ui/button";
import SectionName from "@/components/ui/sectionName";
import { cn } from "@/lib/utils";
import SlideUp from "@/lib/animations/slideUp";
import SectionDescription from "@/components/ui/sectionDescription";

const AboutOne = ({ gridClass, isAboutpage }) => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div
          className={cn(
            "grid lg:grid-cols-[60%_40%] grid-cols-1 items-center",
            gridClass
          )}
        >
          <div className="relative">
            <div className="flex sm:flex-row flex-col sm:items-end gap-6">
              <SlideUp>
                <div className="relative">
                  <div>
                    <img src={shap_1} alt="shap" />
                  </div>
                  <div className="ml-9">
                    <img src={about_img_1} alt="about-bg" className="w-full" />
                  </div>
                  <div className="absolute -bottom-12.5 left-0 bg-primary rounded-[10px] py-4 px-[22px] flex items-center gap-3">
                    <div className="bg-background w-11 h-11 rounded-full flex justify-center items-center">
                      <img src={customer} alt="customer" />
                    </div>
                    <div>
                      <h6 className="text-cream-foreground font-bold text-2xl">
                        2,000+
                      </h6>
                      <p className="text-cream-foreground">Students</p>
                    </div>
                  </div>
                </div>
              </SlideUp>
              <div className="flex sm:flex-col gap-8">
                <div className="bg-warm max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col items-center justify-center text-center">
                  <img src={icreement} alt="icreement" />
                  <h6 className="text-xl font-bold">BFIS Academy</h6>
                  <p>Excellence in Education</p>
                </div>
                <div className="bg-background max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col justify-center drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)]">
                  <h6 className="text-[32px] font-bold text-secondary-foreground">
                    5+
                  </h6>
                  <p>Years of Educational Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Start */}
          <div className={`${isAboutpage ? "" : "lg:max-w-[439px]"} pt-7.5`}>
            <SectionName>About BFIS</SectionName>
            <Title size={"3.5xl"} className={"pb-5"}>
              Unlocking Potential, One Child at a Time
            </Title>
            <SectionDescription>
              At BFIS, we are committed to providing quality education and
              nurturing the next generation of leaders. Our mission is to foster
              academic excellence and holistic growth in every child from
              Nursery to 12th grade.
            </SectionDescription>
            <div className="lg:mt-10 mt-7">
              <Button asChild variant="outline">
                <Link to="/about-us">Learn More</Link>
              </Button>
            </div>
          </div>
          {/* Right Side End */}
        </div>
      </div>
    </section>
  );
};

// Add PropTypes validation
AboutOne.propTypes = {
  gridClass: PropTypes.string, // Validate gridClass as a string
  isAboutpage: PropTypes.bool, // Validate isAboutpage as a boolean
};

export default AboutOne;
