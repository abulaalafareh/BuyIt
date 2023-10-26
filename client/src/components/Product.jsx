function Product(p) {
  const genStar = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="text-yellow-500">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div
      className=" box-content p-1 border-2 border-white m-3 mt-8 rounded-lg bg-green-100 shadow-card"
      key={p.id}
    >
      <img src={p.image} className="h-52 w-52" />
      <h1 className="text-center">
        {p.title.split(" ")[0]} <span></span>
      </h1>
      <div className="flex flex-row justify-between">
        <p className="items-end text-green-600">{p.price + "$"}</p>
        <div className="flex">{genStar(p.rating.rate)}</div>
      </div>
    </div>
  );
}

export default Product;
