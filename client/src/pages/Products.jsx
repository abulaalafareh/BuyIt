import { useEffect, useState } from "react";
import { Sidebar } from "../components";

function Products() {
  const [prod, setprod] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=10");
      const data = await res.json();
      setprod(data);
      console.log(prod);
    };
    fetchData();
  }, []);

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
    <div className="flex">
      <Sidebar />
      <div className="h-screen overflow-y-auto">
        <div className=" flex flex-wrap px-10 py-10 ml-48 ">
          {prod.map((p) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
