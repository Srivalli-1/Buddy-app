import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

function AnalyticsSection() {

  const productivityData = [
    { day: "Mon", tasks: 2 },
    { day: "Tue", tasks: 5 },
    { day: "Wed", tasks: 3 },
    { day: "Thu", tasks: 6 },
    { day: "Fri", tasks: 4 },
    { day: "Sat", tasks: 7 },
    { day: "Sun", tasks: 5 },
  ];

  const xpData = [
    { week: "W1", xp: 200 },
    { week: "W2", xp: 450 },
    { week: "W3", xp: 700 },
    { week: "W4", xp: 1200 },
  ];

  return (
    <div className="grid xl:grid-cols-2 gap-8 mt-10">

      {/* Productivity Chart */}
      <div className="bg-[#0d1324]/80 border border-cyan-500/20 rounded-[30px] p-6 backdrop-blur-2xl">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              Productivity 📈
            </h1>

            <p className="text-gray-400 mt-2">
              Weekly task completion
            </p>

          </div>

          <div className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-xl text-sm">
            +18%
          </div>

        </div>

        <div className="h-[300px]">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={productivityData}>

              <XAxis
                dataKey="day"
                stroke="#9CA3AF"
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="tasks"
                stroke="#22D3EE"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* XP Growth */}
      <div className="bg-[#0d1324]/80 border border-purple-500/20 rounded-[30px] p-6 backdrop-blur-2xl">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              XP Growth 🚀
            </h1>

            <p className="text-gray-400 mt-2">
              Monthly XP progress
            </p>

          </div>

          <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-xl text-sm">
            Level Up
          </div>

        </div>

        <div className="h-[300px]">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={xpData}>

              <XAxis
                dataKey="week"
                stroke="#9CA3AF"
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="xp"
                stroke="#A855F7"
                fill="#A855F7"
                fillOpacity={0.3}
                strokeWidth={4}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default AnalyticsSection;