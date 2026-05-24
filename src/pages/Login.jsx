import React from "react";
import { FaGoogle, FaDiscord, FaGamepad } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

import loginBg from "../assets/login-bg.png";

const Login = () => {
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
          pr-60
          relative
        "
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      >

        {/* BUDDY TODO OUTSIDE GLASS CARD */}
        <div
          className="
            absolute
            top-10
            left-10
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-purple-600
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
              text-[30px]
              font-bold
            "
          >
            Buddy To-Do
          </h1>

        </div>

        {/* SINGLE GLASS CARD */}
        <div
          className="
            w-[530px]

            rounded-[30px]

            border
            border-[#6c63ff33]

            bg-[#04043add]

            backdrop-blur-md

            shadow-[0_0_30px_rgba(130,80,255,0.18)]

            px-10
            py-10

            mt-6
          "
        >

          {/* WELCOME */}
          <div className="mb-10">

            <h1
              className="
                text-white
                font-extrabold
                leading-[0.95]
              "
              style={{
                fontSize: "clamp(28px,4vw,40px)",
              }}
            >
              Welcome Back!
            </h1>

            <p
              className="
                text-gray-300
                text-[17px]
                mt-4
              "
            >
              Login to continue your journey
            </p>

          </div>

          {/* EMAIL */}
          <div className="mb-7">

            <label
              className="
                text-white
                text-[16px]
                font-bold
                block
                mb-3
              "
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              className="
                w-full
                h-[58px]

                rounded-[16px]

                bg-[#23237a]

                border
                border-[#5f5fff]

                px-5

                text-white
                text-[18px]

                outline-none

                placeholder:text-gray-400

                focus:outline-none
                focus:ring-0
              "
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label
              className="
                text-white
                text-[16px]
                font-bold
                block
                mb-3
              "
            >
              Password
            </label>

            <div className="relative">

              <input
                type="password"
                placeholder="Enter your password"
                autoComplete="off"
                className="
                  w-full
                  h-[58px]

                  rounded-[16px]

                  bg-[#23237a]

                  border
                  border-[#5f5fff]

                  px-5

                  text-white
                  text-[18px]

                  outline-none

                  placeholder:text-gray-400

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
                  text-[22px]

                  cursor-pointer
                "
              />

            </div>

          </div>

          {/* FORGOT PASSWORD */}
          <div
            className="
              flex
              justify-end
              mt-4
            "
          >

            <button
              className="
                text-[#b56dff]
                text-[16px]

                hover:text-white
                transition
              "
            >
              Forgot Password?
            </button>

          </div>

          {/* LOGIN BUTTON */}
          <button
            className="
              w-full
              h-[60px]

              mt-8

              rounded-[18px]

              text-white
              text-[24px]
              font-bold

              bg-gradient-to-r
              from-purple-700
              to-purple-400

              shadow-[0_0_30px_rgba(168,85,247,0.5)]

              hover:scale-[1.01]
              transition
            "
          >
            Login
          </button>

          {/* CONTINUE WITH */}
          <div
            className="
              flex
              items-center
              gap-4
              mt-10
            "
          >

            <div className="flex-1 h-[1px] bg-[#5b5b9f]" />

            <p
              className="
                text-gray-300
                text-[16px]
              "
            >
              Or continue with
            </p>

            <div className="flex-1 h-[1px] bg-[#5b5b9f]" />

          </div>

          {/* SOCIAL ICONS */}
          <div
            className="
              flex
              justify-center
              gap-5
              mt-8
            "
          >

            {/* GOOGLE */}
            <button
              className="
                w-[68px]
                h-[68px]

                rounded-[18px]

                bg-[#17175f]

                border
                border-[#4f4fff]

                flex
                items-center
                justify-center

                text-white
                text-3xl

                hover:scale-105
                transition
              "
            >
              <FaGoogle />
            </button>

            {/* DISCORD */}
            <button
              className="
                w-[68px]
                h-[68px]

                rounded-[18px]

                bg-[#17175f]

                border
                border-[#4f4fff]

                flex
                items-center
                justify-center

                text-white
                text-3xl

                hover:scale-105
                transition
              "
            >
              <FaDiscord />
            </button>

            {/* GAME */}
            <button
              className="
                w-[68px]
                h-[68px]

                rounded-[18px]

                bg-[#17175f]

                border
                border-[#4f4fff]

                flex
                items-center
                justify-center

                text-white
                text-3xl

                hover:scale-105
                transition
              "
            >
              <FaGamepad />
            </button>

          </div>

          {/* SIGN UP */}
          <p
            className="
              text-center
              text-gray-300
              text-[17px]
              mt-10
            "
          >

            Don’t have an account?{" "}

            <span
              className="
                text-[#b56dff]
                font-bold
                cursor-pointer
              "
            >
              Sign up
            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;