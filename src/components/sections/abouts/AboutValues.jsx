import { motion } from "framer-motion";
import WordPullUp from "@/components/ui/word-pull-up";
import WordFadeIn from "@/components/ui/word-fade-in";

function AboutValues() {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 md:p-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <WordPullUp
            words="Our Values"
            className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
          />
        </motion.div>

        {/* Animated Subheading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <WordFadeIn
            words="Guiding principles that shape our community and future."
            className="text-lg md:text-xl text-gray-700 mb-8"
          />
        </motion.div>

        {/* Content Section */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-left">
          <p className="text-gray-700 text-base leading-relaxed">
            At our organization, we believe in fostering a community of respect,
            integrity, and excellence. Our values guide our approach to
            education and inspire our students to become curious, pioneering,
            and compassionate leaders of tomorrow.
          </p>
          <p className="mt-4 text-gray-700 text-base leading-relaxed">
            Through dedication to academic excellence and a commitment to social
            responsibility, we aim to create an environment where everyone can
            grow and achieve their fullest potential.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutValues;
