import { ToggleFormContext } from "../contextApi/ToggleFormContext";
import { useContext } from "react";

function Register() {
  const { updateToggleForm } = useContext(ToggleFormContext);

  return (
    <div className="w-full max-w-md">
      <form className=" bg-white  rounded-lg border-style:none px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center font-bold text-lg">Register</h1>
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
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2 "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className=" appearance-none border  rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2 "
              htmlFor="confirm password"
            >
              Confirm Password
            </label>
            <input
              className=" appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Address
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="address"
              >
                Street
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Street"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="City"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Postal Code
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="postalCode"
            type="text"
            placeholder="Postal Code"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="hover:bg-green-700 shadow-md rounded-full px-6 py-3 font-semibold text-white bg-primary"
            type="button"
          >
            Register
          </button>
        </div>
        <p className="flex items-center justify-center">
          Already have an account
          <a href="#" className="text-blue-500" onClick={updateToggleForm}>
            &nbsp; Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
