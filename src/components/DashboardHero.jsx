import { motion } from "framer-motion";

function DashboardHero() {

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-[35px] border border-cyan-500/20 bg-gradient-to-br from-[#0b1023] via-[#111c44] to-[#1b1245] p-8 lg:p-10"
    >

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT */}
        <div>

          <p className="text-cyan-300 font-medium tracking-wide">
            FUTURE PRODUCTIVITY
          </p>

          <h1 className="text-5xl lg:text-6xl font-black leading-tight mt-4">
            Good Evening,
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Srivalli 👋
            </span>

          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mt-6 max-w-[500px]">
            Complete tasks, earn reward points,
            unlock your dream bucket list,
            and grow together with your AI buddy 🚀
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 rounded-2xl text-black font-bold hover:scale-105 transition shadow-[0_0_30px_rgba(34,211,238,0.5)]">

              Start Focus

            </button>

            <button className="border border-cyan-500/30 px-7 py-4 rounded-2xl hover:bg-white/5 transition">

              View Progress

            </button>

          </div>

          {/* Progress Widget */}
          <div className="mt-10 bg-[#0d1324]/80 border border-cyan-500/20 backdrop-blur-2xl rounded-3xl p-5 max-w-[420px]">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-sm">
                  Daily Goal Progress
                </p>

                <h2 className="text-2xl font-bold mt-1">
                  67% Completed
                </h2>

              </div>

              <div className="text-4xl">
                🎯
              </div>

            </div>

            {/* Progress Bar */}
            <div className="w-full h-4 bg-[#111827] rounded-full overflow-hidden mt-5">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "67%" }}
                transition={{ duration: 1.5 }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              ></motion.div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* Floating Card */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-10 left-10 bg-[#0d1324]/90 border border-cyan-500/20 backdrop-blur-xl px-5 py-4 rounded-2xl"
          >

            <p className="text-gray-400 text-sm">
              Tasks Done
            </p>

            <h1 className="text-3xl font-bold text-cyan-400 mt-2">
              24
            </h1>

          </motion.div>

          {/* Robot */}
          <motion.img
            animate={{ y: [-12, 12, -12] }}
            transition={{ repeat: Infinity, duration: 5 }}
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="robot"
            className="relative z-10 w-[350px] drop-shadow-[0_0_50px_rgba(34,211,238,0.5)]"
          />

        </div>

      </div>

    </motion.div>

  );
}

export default DashboardHero;