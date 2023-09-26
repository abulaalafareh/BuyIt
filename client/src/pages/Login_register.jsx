import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { ToggleFormContext } from "../contextApi/ToggleFormContext";
import { useContext } from "react";
import background from "../assets/bg3.jpg";

function Login_register() {
  const { loginForm } = useContext(ToggleFormContext);
  const [login, setLogin] = useState(false);
  const toggleLogin = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  // Define the inline CSS for the background image
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="grid h-screen place-items-center" style={backgroundStyle}>
      {loginForm ? <Register /> : <Login />}
    </div>
  );
}

export default Login_register;
