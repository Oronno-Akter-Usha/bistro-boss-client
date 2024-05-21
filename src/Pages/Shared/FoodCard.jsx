const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card md:w-[400px] h-[600px] bg-white rounded-none pb-10">
      <figure className="w-full relative">
        <img src={image} alt="food image" className="w-full" />
        <p className="absolute top-5 right-5 px-4 py-2 bg-black text-white">
          $ {price}
        </p>
      </figure>
      <div className="p-10  card-body">
        <h2 className="font-semibold text-2xl mb-4">{name}</h2>
        <p className="">{recipe}</p>
      </div>
      <div className="">
        <button className="btn btn-outline bg-[#E8E8E8] px-10 uppercase text-amber-600 border-0  border-b-4 border-amber-600 hover:border-amber-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
