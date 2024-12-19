import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import img from "../../assets/header/register.png";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    age: Yup.number().required("Age is required").positive().integer(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Invalid mobile number")
      .required("Mobile is required"),
    address: Yup.string().required("Address is required"),
    voterId: Yup.number().required("Voter ID is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
    role: Yup.string().required("Role is required"),
  });

  const initialValues = {
    name: "",
    age: "",
    email: "",
    mobile: "",
    address: "",
    voterId: "",
    password: "",
    role: "voter", // Default empty
  };

  const { register } = useContext(AuthContext);
  // Handle form submission
  const handleSubmit = async (values) => {
    await register(values);
  };

  return (
    <div className="bg-[#001124] min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-6 gap-6">
      {/* Image Section */}
      <div className="w-full md:w-2/5 max-w-sm md:max-w-xs mb-4 md:mb-0">
        <img src={img} className="w-full object-contain" alt="Register" />
      </div>
      {/* Form Section */}
      <div className="w-full md:w-3/5 bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Register
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="grid grid-cols-1 gap-2">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <Field
                type="text"
                name="name"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            {/* Age */}
            <div>
              <label className="block text-gray-700 font-medium">Age</label>
              <Field
                type="number"
                name="age"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter your age"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            {/* Mobile */}
            <div>
              <label className="block text-gray-700 font-medium">Mobile</label>
              <Field
                type="text"
                name="mobile"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter your mobile number"
              />
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium">Address</label>
              <Field
                type="text"
                name="address"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter your address"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            {/* Voter ID */}
            <div>
              <label className="block text-gray-700 font-medium">
                Voter ID
              </label>
              <Field
                type="number"
                name="voterId"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter your voter ID"
              />
              <ErrorMessage
                name="voterId"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            {/* Role */}
            <div>
              <label className="block text-gray-700 font-medium">Role</label>
              <Field
                as="select"
                name="role"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              >
                <option value="">Select Role</option>
                <option value="voter">Voter</option>
                <option value="admin">Admin</option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-1 text-sm rounded hover:bg-blue-600 transition duration-300"
              >
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
