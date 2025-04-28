

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await fetch('http://localhost:3001/api/login');
  //     const users = await response.json();

  //     const user = users.find(
  //       (u) => u.email === data.email && u.password === data.password
  //     );

  //     if (user) {
  //       alert("Login successful");
  //       dispatch(login());
  //       navigate("/");
  //     } else {
  //       alert("Invalid email or password");
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     alert("Something went wrong. Please try again later.");
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
  
      if (response.ok) {
        const message = await response.text(); // backend sends text like 'Login successful!'
        alert(message);
        dispatch(login());
        navigate('/');
      } else if (response.status === 401) {
        alert('Invalid email or password');
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again later.');
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-orange-600 mb-2 text-center">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-600 mb-8 text-center">
          Please login to your account
        </p>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
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
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

