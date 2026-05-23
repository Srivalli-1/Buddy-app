import { motion } from "framer-motion";

function StatsCards() {

  const stats = [
    {
      title: "Total Tasks",
      value: "24",
      color: "cyan",
      emoji: "🤖",
      sub: "All Time",
    },
    {
      title: "Completed",
      value: "16",
      color: "green",
      emoji: "✅",
      sub: "This Week",
    },
    {
      title: "Pending",
      value: "8",
      color: "yellow",
      emoji: "⭐",
      sub: "Today",
    },
    {
      title: "Points",
      value: "1250",
      color: "purple",
      emoji: "💎",
      sub: "XP Earned",
    },
  ];

  const colors = {
    cyan: "from-cyan-400/20 to-blue-500/20 border-cyan-500/20 text-cyan-400",
    green: "from-green-400/20 to-emerald-500/20 border-green-500/20 text-green-400",
    yellow: "from-yellow-400/20 to-orange-500/20 border-yellow-500/20 text-yellow-400",
    purple: "from-purple-400/20 to-pink-500/20 border-purple-500/20 text-purple-400",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      {stats.map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            scale: 1.03,
          }}
          className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br ${colors[item.color]} p-6 backdrop-blur-2xl`}
        >

          {/* Glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-[50px] rounded-full"></div>

          <div className="relative z-10 flex items-center justify-between">

            <div>

              <p className="text-gray-400 text-sm">
                {item.title}
              </p>

              <h1 className={`text-4xl font-black mt-3 ${colors[item.color].split(' ')[2]}`}>
                {item.value}
              </h1>

              <p className="text-gray-500 text-sm mt-2">
                {item.sub}
              </p>

            </div>

            <div className="text-5xl">
              {item.emoji}
            </div>

          </div>

        </motion.div>

      ))}

    </div>
  );
}

export default StatsCards;