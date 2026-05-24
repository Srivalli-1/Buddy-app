function RecentActivity() {

  const activities = [
    {
      name: "React Project UI",
      xp: "+50 pts",
      time: "Today",
    },
    {
      name: "MongoDB Practice",
      xp: "+40 pts",
      time: "Yesterday",
    },
    {
      name: "OS Notes",
      xp: "+30 pts",
      time: "Yesterday",
    },
  ];

  return (
    <div className="bg-[#0d1324]/80 border border-cyan-500/20 rounded-[30px] p-6 backdrop-blur-2xl">

      <div className="flex items-center justify-between mb-6">

        <h1 className="text-2xl font-bold">
          Recent Activity ⚡
        </h1>

        <button className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-xl text-sm">
          View All
        </button>

      </div>

      <div className="flex flex-col gap-4">
      </div>

    </div>
  );
}

export default RecentActivity;