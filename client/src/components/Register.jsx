import { ToggleFormContext } from "../contextApi/ToggleFormContext";
import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Register() {
  const { updateToggleForm } = useContext(ToggleFormContext);

  const formData = {
    email: "",
    name: "",
    password: "",
    confirm: "",
    street: "",
    city: "",
    postal: "",
  };

  const registerSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email."),
    password: Yup.string().min(5).required("Please enter your password."),
    confirm: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match."),
    street: Yup.string().required("Please enter your street."),
    city: Yup.string().required("Please enter your city."),
    postal: Yup.number("please enter a number.").required(
      "Please enter your postal code."
    ),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: formData,
      validationSchema: registerSchema,
      onSubmit: async (values) => {
        try {
          const response = await axios.post(
            "http://localhost:5000/auth/register",
            values
          );
          console.log(response);
        } catch (error) {
          console.error(error.response.data);
        }
      },
    });

  return (
    <div className="w-full max-w-md">
      <form
        className=" bg-white  rounded-lg border-style:none px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold text-lg">Register</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="abc@xyz.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <p className="text-red-500 form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="John"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name ? (
            <p className="text-red-500 form-error">{errors.name}</p>
          ) : null}
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
              name="password"
              type="password"
              placeholder="******************"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <p className="text-red-500 form-error">{errors.password}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2 "
              htmlFor="confirm"
            >
              Confirm Password
            </label>
            <input
              className=" appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm"
              name="confirm"
              type="password"
              placeholder="******************"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirm}
            />
            {errors.confirm && touched.confirm ? (
              <p className="text-red-500 form-error">{errors.confirm}</p>
            ) : null}
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
                htmlFor="street"
              >
                Street
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="street"
                name="street"
                type="text"
                placeholder="Street"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.street}
              />
              {errors.street && touched.street ? (
                <p className="text-red-500 form-error">{errors.street}</p>
              ) : null}
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
                name="city"
                type="text"
                placeholder="City"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              {errors.city && touched.city ? (
                <p className="text-red-500 form-error">{errors.city}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="postal"
          >
            Postal Code
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="postal"
            name="postal"
            type="text"
            placeholder="Postal Code"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.postal}
          />
          {errors.postal && touched.postal ? (
            <p className="text-red-500 form-error">{errors.postal}</p>
          ) : null}
        </div>

        <div className="flex items-center justify-center">
          <button
            className="hover:bg-green-700 shadow-md rounded-full px-6 py-3 font-semibold text-white bg-button"
            type="submit"
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
