import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import signupBg from "../assets/signup-bg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSignup = async () => {

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await axios.post(
        "https://buddy-app.onrender.com/api/auth/signup",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Signup Successful 🚀");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Signup Failed");

    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#020224]">

      {/* BACKGROUND */}
      <div
        className="
          h-full
          w-full
          bg-cover
          bg-center
          flex
          items-center
          justify-end
          pr-50
          pt-2
          relative
        "
        style={{
          backgroundImage: `url(${signupBg})`,
        }}
      >

        {/* LOGO */}
        <div
          className="
            absolute
            top-6
            left-6
            flex
            items-center
            gap-3
            z-20
          "
        >

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-[#6b2dff]
              flex
              items-center
              justify-center
              text-lg
            "
          >
            🤖
          </div>

          <h1
            className="
              text-white
              text-[28px]
              font-bold
            "
          >
            Buddy To-Do
          </h1>

        </div>

        {/* GLASS CARD */}
        <div
          className="
            w-[555px]

            rounded-[28px]

            border
            border-[#7a6dff66]

            bg-[#04043ae6]

            backdrop-blur-md

            shadow-[0_0_40px_rgba(120,90,255,0.22)]

            px-9
            py-7

            mr-2
          "
        >

          {/* USERNAME */}
          <div className="mb-4">

            <label
              className="
                text-white
                text-[15px]
                font-semibold
                block
                mb-2
              "
            >
              Username
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              autoComplete="off"
              className="
                w-full
                h-[52px]

                rounded-[14px]

                bg-[#22227a]

                border
                border-[#6363ff]

                px-5

                text-white
                text-[16px]

                placeholder:text-gray-400

                outline-none
                focus:outline-none
                focus:ring-0
              "
            />

          </div>

          {/* EMAIL */}
          <div className="mb-4">

            <label
              className="
                text-white
                text-[15px]
                font-semibold
                block
                mb-2
              "
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="off"
              className="
                w-full
                h-[52px]

                rounded-[14px]

                bg-[#22227a]

                border
                border-[#6363ff]

                px-5

                text-white
                text-[16px]

                placeholder:text-gray-400

                outline-none
                focus:outline-none
                focus:ring-0
              "
            />

          </div>

          {/* PASSWORD */}
          <div className="mb-4">

            <label
              className="
                text-white
                text-[15px]
                font-semibold
                block
                mb-2
              "
            >
              Password
            </label>

            <div className="relative">

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                autoComplete="off"
                className="
                  w-full
                  h-[52px]

                  rounded-[14px]

                  bg-[#22227a]

                  border
                  border-[#6363ff]

                  px-5

                  text-white
                  text-[16px]

                  placeholder:text-gray-400

                  outline-none
                  focus:outline-none
                  focus:ring-0
                "
              />

              <FiEye
                className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2

                  text-gray-300
                  text-[20px]

                  cursor-pointer
                "
              />

            </div>

          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-4">

            <label
              className="
                text-white
                text-[15px]
                font-semibold
                block
                mb-2
              "
            >
              Confirm Password
            </label>

            <div className="relative">

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                autoComplete="off"
                className="
                  w-full
                  h-[52px]

                  rounded-[14px]

                  bg-[#22227a]

                  border
                  border-[#6363ff]

                  px-5

                  text-white
                  text-[16px]

                  placeholder:text-gray-400

                  outline-none
                  focus:outline-none
                  focus:ring-0
                "
              />

              <FiEye
                className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2

                  text-gray-300
                  text-[20px]

                  cursor-pointer
                "
              />

            </div>

          </div>

          {/* TERMS */}
          <div
            className="
              flex
              items-center
              gap-3
              mb-6
            "
          >

            <input
              type="checkbox"
              className="
                w-4
                h-4
                accent-purple-500
              "
            />

            <p
              className="
                text-gray-300
                text-[14px]
              "
            >
              I agree to the{" "}

              <span className="text-[#9f66ff]">
                Terms & Conditions
              </span>

            </p>

          </div>

          {/* SIGNUP BUTTON */}
          <button
            onClick={handleSignup}
            className="
              w-full
              h-[58px]

              rounded-[16px]

              text-white
              text-[22px]
              font-bold

              bg-gradient-to-r
              from-[#7c2dff]
              to-[#bb75ff]

              shadow-[0_0_30px_rgba(160,90,255,0.55)]

              hover:scale-[1.01]

              transition
            "
          >
            Sign Up
          </button>

          {/* LOGIN */}
          <p
            className="
              text-center
              text-gray-300
              text-[16px]
              mt-6
            "
          >

            Already have an account?{" "}

            <span
              className="
                text-[#b06dff]
                font-semibold
                cursor-pointer
              "
            >
              Login
            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;