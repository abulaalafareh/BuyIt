import Login from "../components/Login";
import Register from "../components/Register";
import { ToggleFormContext } from "../contextApi/ToggleFormContext";
import { useContext } from "react";
import background from "../assets/bg4.png";

function Login_register() {
  const { loginForm } = useContext(ToggleFormContext);

  // Define the inline CSS for the background image
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="grid h-screen place-items-center" style={backgroundStyle}>
      {loginForm ? <Register /> : <Login />}
    </div>
  );
}

export default Login_register;
