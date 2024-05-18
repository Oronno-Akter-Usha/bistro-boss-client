const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div>
      <div className="w-full mt-16">
        <h3 className="text-center italic text-amber-600 md:text-lg mb-4">
          ---{subHeading}---
        </h3>
        <hr className="w-72 border border-gray-200 mx-auto" />
        <h2 className="md:text-4xl text-center my-5">{heading}</h2>
        <hr className="w-72 border border-gray-200 mx-auto mb-12" />
      </div>
    </div>
  );
};

export default SectionTitle;
