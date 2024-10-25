import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import imagePic from "@/assets/images/webp/imagePic.webp";

export default function PicLayout() {
  // References for the image, heading, and paragraph to observe when they come into view
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Detect when the elements are in view
  const isImageInView = useInView(imageRef, { triggerOnce: false });
  const isHeadingInView = useInView(headingRef, { triggerOnce: false });
  const isParagraphInView = useInView(paragraphRef, { triggerOnce: false });

  return (
    <div className="bg-red-600 p-8 flex justify-center flex-col md:flex-row items-center overflow-x-hidden">
      {/* Image Section - Slide in from Left */}
      <motion.div
        className="md:w-1/2"
        ref={imageRef} // Ref for the image to track when it's in view
        initial={{ x: "-100%", opacity: 0 }} // Start outside from the left
        animate={isImageInView ? { x: 0, opacity: 1 } : {}} // Animate only when in view
        transition={{ type: "spring", stiffness: 60, delay: 0.2 }} // Control speed and smoothness
      >
        <img
          src={imagePic}
          alt="Classroom with colorful bookshelves"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-8 text-white">
        {/* Heading Section - Slide in from Right */}
        <motion.h2
          className="text-4xl font-bold mb-4 font-playfair"
          ref={headingRef} // Ref for the heading to track when it's in view
          initial={{ x: "100%", opacity: 0 }} // Start outside from the right
          animate={isHeadingInView ? { x: 0, opacity: 1 } : {}} // Animate only when in view
          transition={{ type: "spring", stiffness: 60, delay: 0.3 }} // Control speed and smoothness
        >
          The Place Where You Can Thrive
        </motion.h2>

        {/* Paragraph Section - Slide in from Bottom */}
        <motion.p
          className="text-sm text-slate-300 font-montserrat"
          ref={paragraphRef} // Ref for the paragraph to track when it's in view
          initial={{ y: "100%", opacity: 0 }} // Start outside from the bottom
          animate={isParagraphInView ? { y: 0, opacity: 1 } : {}} // Animate only when in view
          transition={{ type: "spring", stiffness: 60, delay: 0.4 }} // Control speed and smoothness
        >
          Brookfield, as the best school in Tricity, prepares children for
          higher education and for a full understanding of subjects through
          building their mental, emotional, social, and physical capabilities.
          In pre-nursery school in Chandigarh, young children learn and play by
          being assisted by professionals in their early years of education.
          Brookfield, the top CBSE schools in Chandigarh/Mohali, offers students
          a simple and easy to understand learning curriculum that makes
          studying enjoyable with the affordable fee structure of Mohali
          schools.
        </motion.p>
      </div>
    </div>
  );
}
