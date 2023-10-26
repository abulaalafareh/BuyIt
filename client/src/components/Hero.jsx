import { Link } from "react-router-dom";
import h3 from "../assets/h3.jpg";
function Hero() {
  const backgroundStyle = {
    backgroundImage: `url(${h3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section
      className="relative w-full h-screen mx-auto  flex items-center justify-center bg-slate-200 text-center "
      style={backgroundStyle}
    >
      <div className="items-center">
        <h6 className="text-6xl text-white ">
          Want to shop your <span className="text-red-600">HEART</span> out?
        </h6>
        <h6 className="mt-10 text-3xl text-white ">
          Welcome to the <span className="text-green-500 font-bold">Right</span>{" "}
          place
        </h6>
        <Link className="nav-link active" to="/products">
          <button
            className=" mt-20 hover:border-2 hover:font-bold shadow-inner shadow-white  border  rounded-full px-6 py-3 font-semibold text-white "
            type="click"
          >
            Products
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
