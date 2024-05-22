const Card = ({ icon, heading, subHeading, subHeading2 }) => {
  return (
    <div className="border border-gray-300 text-center rounded-lg">
      <div className="bg-amber-500 w-full py-6 flex justify-center text-center text-white text-3xl rounded-t-lg">
        {icon}
      </div>
      <div className="bg-gray-200 mx-4 mb-4 p-10 md:p-5 lg:p-20 md:h-[300px] rounded-b-lg">
        <h4 className="font-medium text-2xl mb-4">{heading}</h4>
        <p>{subHeading}</p>
        <p>{subHeading2}</p>
      </div>
    </div>
  );
};

export default Card;
