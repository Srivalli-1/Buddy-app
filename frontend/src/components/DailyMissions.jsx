import { motion } from "framer-motion";

function DailyMissions() {

  const missions = [
    {
      title: "Complete 3 Tasks",
      reward: "+150 XP",
      progress: 70,
    },
    {
      title: "Study for 2 Hours",
      reward: "+100 XP",
      progress: 45,
    },
    {
      title: "Maintain Focus Streak",
      reward: "+200 XP",
      progress: 90,
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      {/* Daily Missions */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-[#0d1324]/70 border border-cyan-500/20 rounded-3xl p-8"
      >

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-cyan-400">
              Daily Missions 🎯
            </h1>

            <p className="text-gray-400 mt-2">
              Complete missions to earn XP
            </p>

          </div>

          <div className="bg-cyan-400 text-black px-5 py-3 rounded-2xl font-bold">
            +450 XP
          </div>

        </div>

        {/* Mission Cards */}
        <div className="flex flex-col gap-6 mt-8">

          {missions.map((mission, index) => (

            <div
              key={index}
              className="bg-[#111827] rounded-2xl p-5"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-xl font-bold">
                    {mission.title}
                  </h2>

                  <p className="text-cyan-400 mt-2">
                    Reward: {mission.reward}
                  </p>

                </div>

                <span className="text-gray-400">
                  {mission.progress}%
                </span>

              </div>

              {/* Progress Bar */}
              <div className="w-full h-4 bg-gray-700 rounded-full mt-5 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${mission.progress}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-full bg-cyan-400 rounded-full"
                ></motion.div>

              </div>

            </div>

          ))}

        </div>

      </motion.div>

      {/* Streak Tracker */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-[#0d1324]/70 border border-purple-500/20 rounded-3xl p-8"
      >

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-purple-400">
              Streak Tracker 🔥
            </h1>

            <p className="text-gray-400 mt-2">
              Stay consistent every day
            </p>

          </div>

          <div className="bg-purple-400 text-black px-5 py-3 rounded-2xl font-bold">
            7 Days
          </div>

        </div>

        {/* Streak Visual */}
        <div className="grid grid-cols-7 gap-3 mt-10">

          {[1, 2, 3, 4, 5, 6, 7].map((day) => (

            <div
              key={day}
              className={`h-20 rounded-2xl flex items-center justify-center font-bold text-lg ${
                day <= 5
                  ? "bg-purple-400 text-black"
                  : "bg-[#111827]"
              }`}
            >
              🔥
            </div>

          ))}

        </div>

        {/* Motivation */}
        <div className="bg-[#111827] rounded-2xl p-6 mt-10">

          <h2 className="text-2xl font-bold text-purple-400">
            Consistency Builds Greatness 🚀
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Every single productive day compounds into
            massive success over time.
          </p>

        </div>

      </motion.div>

    </div>
  );
}

export default DailyMissions;