const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="md:flex space-x-4">
      <img
        className="w-[118px] h-[104px] rounded-full rounded-tl-none"
        src={image}
        alt=""
      />
      <div className="mt-5 md:mt-0">
        <h3 className="uppercase text-xl">{name}------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-amber-500 text-xl">${price}</p>
    </div>
  );
};

export default MenuItem;
