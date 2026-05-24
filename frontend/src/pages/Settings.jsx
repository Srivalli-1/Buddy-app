import DashboardLayout from "../layouts/DashboardLayout";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

function Settings() {

  return (
    <PageWrapper>

    <DashboardLayout>

      {/* Header */}
      <div>

        <h1 className="text-5xl font-bold text-cyan-400">
          Settings ⚙️
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Customize your futuristic productivity experience.
        </p>

      </div>

      {/* Profile Section */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-[#0d1324]/70 border border-cyan-500/20 rounded-3xl p-8 mt-10"
        >

        <div className="flex items-center gap-6">

          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-cyan-400 text-black flex items-center justify-center text-4xl font-bold">
            S
          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Srivalli
            </h1>

            <p className="text-gray-400 mt-2">
              Level 5 Explorer 🚀
            </p>

          </div>

        </div>

        {/* Inputs */}
        <div className="grid lg:grid-cols-2 gap-6 mt-10">

          <input
            type="text"
            placeholder="Username"
            className="bg-[#111827] border border-cyan-500/20 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

          <input
            type="email"
            placeholder="Email"
            className="bg-[#111827] border border-cyan-500/20 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
          />

        </div>

        <button className="mt-8 bg-cyan-400 text-black px-6 py-4 rounded-2xl font-bold hover:scale-105 transition">

          Save Changes

        </button>

      </motion.div>

      {/* Preferences */}
      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        {/* Notifications */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#0d1324]/70 border border-purple-500/20 rounded-3xl p-8"
          >

          <h1 className="text-3xl font-bold text-purple-400">
            Notifications 🔔
          </h1>

          <div className="flex flex-col gap-6 mt-8">

            <div className="flex justify-between items-center">

              <span>Email Notifications</span>

              <div className="w-14 h-8 bg-purple-400 rounded-full flex items-center px-1">
                <div className="w-6 h-6 bg-white rounded-full ml-auto"></div>
              </div>

            </div>

            <div className="flex justify-between items-center">

              <span>Task Reminders</span>

              <div className="w-14 h-8 bg-purple-400 rounded-full flex items-center px-1">
                <div className="w-6 h-6 bg-white rounded-full ml-auto"></div>
              </div>

            </div>

            <div className="flex justify-between items-center">

              <span>Buddy Activity</span>

              <div className="w-14 h-8 bg-gray-700 rounded-full flex items-center px-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>

            </div>

          </div>

        </motion.div>

        {/* Theme */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#0d1324]/70 border border-pink-500/20 rounded-3xl p-8"
          >

          <h1 className="text-3xl font-bold text-pink-400">
            Appearance 🎨
          </h1>

          <div className="grid grid-cols-2 gap-6 mt-8">

            {/* Dark Theme */}
            <div className="bg-[#111827] rounded-2xl p-6 border border-cyan-500/20 cursor-pointer hover:border-cyan-400 transition">

              <div className="h-24 bg-black rounded-xl"></div>

              <h2 className="mt-4 font-bold text-center">
                Dark Mode
              </h2>

            </div>

            {/* Light Theme */}
            <div className="bg-[#111827] rounded-2xl p-6 border border-gray-700 cursor-pointer hover:border-pink-400 transition">

              <div className="h-24 bg-gray-200 rounded-xl"></div>

              <h2 className="mt-4 font-bold text-center">
                Light Mode
              </h2>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Danger Zone */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-[#0d1324]/70 border border-red-500/20 rounded-3xl p-8 mt-10"
        >

        <h1 className="text-3xl font-bold text-red-400">
          Danger Zone ⚠️
        </h1>

        <p className="text-gray-400 mt-4">
          Manage account deletion and logout options carefully.
        </p>

        <div className="flex gap-4 mt-8 flex-wrap">

          <button className="bg-red-500 text-white px-6 py-4 rounded-2xl font-bold hover:scale-105 transition">

            Delete Account

          </button>

          <button className="bg-[#111827] px-6 py-4 rounded-2xl font-bold hover:bg-red-500/20 transition">

            Logout

          </button>

        </div>

      </motion.div>

    </DashboardLayout>
        </PageWrapper>
  );
}

export default Settings;