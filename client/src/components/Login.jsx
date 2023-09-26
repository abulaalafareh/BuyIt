import { ToggleFormContext } from "../contextApi/ToggleFormContext";
import { useContext } from "react";

function Login() {
  const { updateToggleForm } = useContext(ToggleFormContext);
  return (
    <div className="w-full max-w-xs">
      <form className=" bg-white  rounded-lg border-style:none px-8 pt-6 pb-8 mb-4">
        <h1 className="font-bold text-center">Login</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2 "
            htmlFor="password"
          >
            Password
          </label>
          <input
            className=" appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between ml-20 ">
          <button
            className="hover:bg-green-700 shadow-md rounded-full px-6 py-3 font-semibold text-white bg-primary"
            type="button"
          >
            Sign In
          </button>
        </div>
        <p className="text-center mt-5">
          Dont have an account{" "}
          <a href="#" className="text-blue-400" onClick={updateToggleForm}>
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
