import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api/api";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const { data } = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );

      navigate("/dashboard");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="w-[400px] p-6 border rounded-lg space-y-4"
      >

        <h1 className="text-3xl font-bold">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <button
          className="w-full bg-black text-white p-3 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;