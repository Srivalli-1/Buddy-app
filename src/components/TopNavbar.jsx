import { FiSearch, FiBell, FiMessageCircle } from 'react-icons/fi';

function TopNavbar() {

  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between mb-8">

      {/* Search */}
      <div className="relative flex-1 max-w-[700px]">

        <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

        <input
          type="text"
          placeholder="Search tasks, buddies, rooms..."
          className="w-full bg-[#0d1324]/80 border border-cyan-500/20 rounded-2xl py-4 pl-14 pr-5 outline-none text-white backdrop-blur-xl focus:border-cyan-400"
        />

      </div>

      {/* Right Widgets */}
      <div className="flex items-center gap-4">

        <button className="relative w-14 h-14 rounded-2xl bg-[#0d1324]/80 border border-cyan-500/20 flex items-center justify-center hover:scale-105 transition">

          <FiBell className="text-xl" />

          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-cyan-400"></div>

        </button>

        <button className="relative w-14 h-14 rounded-2xl bg-[#0d1324]/80 border border-cyan-500/20 flex items-center justify-center hover:scale-105 transition">

          <FiMessageCircle className="text-xl" />

          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-purple-400"></div>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-[#0d1324]/80 border border-cyan-500/20 rounded-2xl px-4 py-2 backdrop-blur-xl">

          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h2 className="font-semibold">
              Srivalli
            </h2>

            <p className="text-gray-400 text-sm">
              Level 4
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default TopNavbar;