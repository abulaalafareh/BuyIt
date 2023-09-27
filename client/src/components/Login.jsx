import { ToggleFormContext } from "../contextApi/ToggleFormContext";
import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const { updateToggleForm } = useContext(ToggleFormContext);
  const formData = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: formData,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        // api calls and stuff here
        console.log(values);
      },
    });
  return (
    <div className="w-full max-w-xs">
      <form
        className=" bg-white  rounded-lg border-style:none px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-center">Login</h1>
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
            name="password"
            type="password"
            placeholder="**********"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password && touched.password ? (
            <p className="text-red-500 form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="flex items-center justify-between ml-20 ">
          <button
            className="hover:bg-green-700 shadow-md rounded-full px-6 py-3 font-semibold text-white bg-primary"
            type="submit"
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
