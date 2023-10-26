import { Hero, Product, Footer } from "../components";
import { useEffect, useState } from "react";

function Landing() {
  const [prod, setprod] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=30");
      const data = await res.json();
      setprod(data);
      console.log(prod);
    };
    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <div className=" flex flex-wrap px-7 py-10">
        {prod.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Landing;
