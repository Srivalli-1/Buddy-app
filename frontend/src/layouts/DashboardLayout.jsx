import { Link } from "react-router-dom";
import { useContext } from "react";

import FloatingBot from "../components/FloatingBot";
import NotificationPanel from "../components/NotificationPanel";

import { ThemeContext } from "../context/ThemeContext";

function DashboardLayout({ children }) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`relative min-h-screen flex flex-col lg:flex-row overflow-hidden transition-all duration-500 ${
        theme === "dark"
          ? "bg-[#050816] text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full animate-pulse"></div>

      </div>

      {/* Sidebar */}
      <div
        className={`relative z-10 w-full lg:w-[260px] border-r p-6 flex flex-col justify-between transition-all duration-500 ${
          theme === "dark"
            ? "bg-[#0d1324]/80 border-cyan-500/20 backdrop-blur-2xl"
            : "bg-white border-gray-300"
        }`}
      >

        <div>

          {/* Logo */}
          <h1 className="text-3xl font-bold text-cyan-400 mb-10">
            Buddy 🚀
          </h1>

          {/* Navigation */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2">

            <Link to="/dashboard">
              <button className="min-w-[140px] lg:w-full py-3 px-4 rounded-2xl transition whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-[#111827]">
                Dashboard
              </button>
            </Link>

            <Link to="/dashboard/tasks">
              <button className="min-w-[140px] lg:w-full py-3 px-4 rounded-2xl transition whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-[#111827]">
                Tasks
              </button>
            </Link>

            <Link to="/dashboard/rewards">
              <button className="min-w-[140px] lg:w-full py-3 px-4 rounded-2xl transition whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-[#111827]">
                Rewards
              </button>
            </Link>

            <Link to="/dashboard/bucket">
              <button className="min-w-[140px] lg:w-full py-3 px-4 rounded-2xl transition whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-[#111827]">
                Bucket List
              </button>
            </Link>

            <Link to="/dashboard/buddies">
              <button className="min-w-[140px] lg:w-full py-3 px-4 rounded-2xl transition whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-[#111827]">
                Buddies
              </button>
            </Link>

            <Link to="/dashboard/settings">
              <button className="min-w-[140px] lg:w-full py-3 px-4 rounded-2xl transition whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-[#111827]">
                Settings
              </button>
            </Link>

          </div>

        </div>

        {/* Robot Assistant */}
        <div className="hidden lg:block rounded-3xl p-5 text-center mt-10 border bg-[#111827]/80 border-cyan-500/20 backdrop-blur-2xl">

          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="robot"
            className="w-24 mx-auto mb-4"
          />

          <h2 className="text-cyan-400 font-bold text-xl">
            Buddy Bot 🤖
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Keep growing every day ✨
          </p>

        </div>

      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 overflow-y-auto">

        {/* Navbar */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between lg:items-center px-5 lg:px-10 py-6 border-b backdrop-blur-2xl shadow-[0_0_30px_rgba(34,211,238,0.08)] bg-[#0d1324]/50 border-cyan-500/10">

          {/* Left */}
          <div>

            <h1 className="text-2xl lg:text-3xl font-bold">
              Buddy Dashboard 🌸
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              Welcome back, future achiever 🚀
            </p>

          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-2xl border hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition bg-[#111827] border-cyan-500/20"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            {/* Notifications */}
            <NotificationPanel />

            {/* Profile */}
            <div className="flex items-center gap-4">

              <div className="bg-cyan-400 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                S
              </div>

              <div>

                <h2 className="font-semibold">
                  Srivalli
                </h2>

                <p className="text-gray-400 text-sm">
                  Level 5 Explorer
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Page Content */}
        <div className="p-5 lg:p-10">
          {children}
        </div>

      </div>

      {/* Floating Bot */}
      <FloatingBot />

    </div>
  );
}

export default DashboardLayout;