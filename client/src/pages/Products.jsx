import { useEffect, useState } from "react";
import { Sidebar, Product } from "../components";

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

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen overflow-y-auto">
        <div className=" flex flex-wrap px-10 py-10 ml-48 ">
          {prod.map((p) => (
            <Product key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
