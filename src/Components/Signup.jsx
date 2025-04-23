import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    navigate("/login");
  };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    //   <form
    //     onSubmit={handleSubmit(onSubmit)}
    //     className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
    //   >
    //     <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

    //     <div>
    //       <input
    //         {...register("name", { required: "Name is required" })}
    //         placeholder="Enter your name"
    //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //       {errors.name && (
    //         <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
    //       )}
    //     </div>

    //     <div>
    //       <input
    //         {...register("email", {
    //           required: "Email is required",
    //           pattern: {
    //             value: /^\S+@\S+$/i,
    //             message: "Enter a valid email",
    //           },
    //         })}
    //         type="email"
    //         placeholder="Enter your email"
    //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //       {errors.email && (
    //         <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
    //       )}
    //     </div>

    //     <div>
    //       <input
    //         {...register("password", { required: "Password is required" })}
    //         type="password"
    //         placeholder="Enter your password"
    //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //       {errors.password && (
    //         <p className="text-red-500 text-sm mt-1">
    //           {errors.password.message}
    //         </p>
    //       )}
    //     </div>

    //     <div>
    //       <input
    //         {...register("confirmpassword", {
    //           required: "Confirm password is required",
    //           validate: (value) =>
    //             value === password || "Passwords do not match",
    //         })}
    //         type="password"
    //         placeholder="Confirm your password"
    //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //       {errors.confirmpassword && (
    //         <p className="text-red-500 text-sm mt-1">
    //           {errors.confirmpassword.message}
    //         </p>
    //       )}
    //     </div>

    //     <button
    //       type="submit"
    //       className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4 transition-all duration-300 hover:shadow-2xl"
  >
    <h2 className="text-3xl font-extrabold text-orange-600 mb-2 text-center">
      Create Account
    </h2>
    <p className="text-sm text-gray-600 mb-6 text-center">
      Please fill in the details to sign up
    </p>

    <div>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Enter your name"
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
      )}
    </div>

    <div>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Enter a valid email",
          },
        })}
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
    </div>

    <div>
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Enter your password"
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
      )}
    </div>

    <div>
      <input
        {...register("confirmpassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
        type="password"
        placeholder="Confirm your password"
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
      {errors.confirmpassword && (
        <p className="text-red-500 text-sm mt-1">
          {errors.confirmpassword.message}
        </p>
      )}
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition"
    >
      Sign Up
    </button>

    <p className="mt-4 text-sm text-center text-gray-600">
      Already have an account?{" "}
      <a href="/login" className="text-orange-500 hover:underline">
        Login
      </a>
    </p>
  </form>
</div>

  );
}

export default Signup;
