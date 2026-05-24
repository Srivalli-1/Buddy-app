function CalendarWidget() {
  const days = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];

  const dates = [
    "27", "28", "29", "30", "1", "2", "3",
    "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17",
    "18", "19", "20", "21", "22", "23", "24",
    "25", "26", "27", "28", "29", "30", "31",
  ];

  return (
    <div className="bg-[#0d1324]/80 border border-cyan-500/20 rounded-[30px] p-6 backdrop-blur-2xl">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            Calendar 📅
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            May 2026
          </p>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
          alt="robot"
          className="w-16"
        />

      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-3 text-center text-gray-400 text-sm mb-4">

        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}

      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-3 text-center">

        {dates.map((date, index) => (

          <div
            key={index}
            className={`h-11 rounded-xl flex items-center justify-center text-sm transition hover:scale-105 cursor-pointer ${
              date === "16"
                ? "bg-cyan-400 text-black font-bold"
                : "bg-[#111827] hover:bg-cyan-500/20"
            }`}
          >
            {date}
          </div>

        ))}

      </div>

    </div>
  );
}

export default CalendarWidget;