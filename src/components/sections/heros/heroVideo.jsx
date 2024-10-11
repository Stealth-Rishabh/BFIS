const HeroVideo = () => {
  return (
    <section className="relative w-full" style={{ paddingTop: "56.25%" }}>
      {" "}
      {/* 16:9 aspect ratio */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://www.bfis.in/wp-content/themes/bfis-theme/js/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroVideo;
