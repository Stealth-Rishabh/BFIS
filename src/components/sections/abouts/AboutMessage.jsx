function AboutMessage() {
  return (
    <div className="p-8">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Left Side: Image */}
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://www.bfis.in/wp-content/uploads/2021/04/President-BFIS-300x300.jpg"
                  loading="lazy"
                  alt="Brookfield International School"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="md:pt-8">
              <p className="text-center font-bold text-indigo-500 md:text-left">
                Who we are
              </p>

              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Brookfield International School
              </h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Brookfield International School is a CBSE Affiliated
                Co-educational Senior Secondary School, established in 2020
                under the patronage of the Indo Global Education Society, which
                was established in 2003. Today, the society operates 4 colleges
                with over 10,000 alumni. With Brookfield, we look forward into
                the twenty-first century with imagination and confidence,
                placing the value of an all-round education, in which each
                individual and their talents come first, at the forefront of our
                mission.
              </p>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Our community values people. We are warm, compassionate, and
                mutually supportive. Here, generosity of spirit and respect
                matter. We take time to enjoy life, appreciating each student in
                all their diversity for who they are. Supported by staff who
                truly care, our students shape the community and make Brookfield
                the rich and happy place it is.
              </p>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Intellectual rigour, exploration, critical analysis, creativity,
                risk-taking, communication, teamwork – all are central to the
                way we guide, nurture, and inspire our young people. Our role is
                to equip them with the skills, confidence, and capabilities to
                navigate their own paths through life, and the unshakeable sense
                of self they need to influence the world for the better.
              </p>

              <p className="text-right font-bold text-gray-800">
                - Manav Singla
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMessage;
