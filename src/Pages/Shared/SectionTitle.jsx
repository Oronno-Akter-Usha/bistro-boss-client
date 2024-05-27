const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div>
      <div className="w-fit text-center mx-auto mb-6 md:mb-12">
        <h3 className="italic text-amber-600 md:text-lg mb-4">
          --- {subHeading} ---
        </h3>

        <h2 className="text-3xl md:text-4xl  my-5 uppercase border-y-4 mb-12 py-5 px-4">
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
