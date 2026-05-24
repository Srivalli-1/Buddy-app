import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.png";

// ── Feature Card Icons ────────────────────────────────────────────

const SmartTasksIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <rect x="7" y="7" width="26" height="26" rx="6" fill="white" fillOpacity="0.18"/>
    <path d="M12 20.5L17.5 26L28 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EarnPointsIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <circle cx="20" cy="20" r="13" fill="white" fillOpacity="0.18"/>
    <polygon
      points="20,9 22.9,16.2 30.8,16.2 24.5,20.9 26.9,28.1 20,23.5 13.1,28.1 15.5,20.9 9.2,16.2 17.1,16.2"
      fill="white"
    />
  </svg>
);

const BucketListIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <polygon
      points="20,6 23.8,15 33.5,15 26,21 28.8,30.5 20,25 11.2,30.5 14,21 6.5,15 16.2,15"
      fill="white"
    />
  </svg>
);

const AIBuddyIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <rect x="8" y="14" width="24" height="17" rx="5" fill="white" fillOpacity="0.2"/>
    <circle cx="15" cy="21" r="3" fill="white"/>
    <circle cx="25" cy="21" r="3" fill="white"/>
    <path d="M15 27.5 Q20 30.5 25 27.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="20" y1="14" x2="20" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="8.5" r="2" fill="white"/>
    <rect x="4" y="18" width="4" height="7" rx="2" fill="white" fillOpacity="0.45"/>
    <rect x="32" y="18" width="4" height="7" rx="2" fill="white" fillOpacity="0.45"/>
  </svg>
);

// ── Stats Badge Icons ─────────────────────────────────────────────

const UsersStatIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="24" fill="#1E1450"/>
    {/* back person */}
    <circle cx="28" cy="18" r="5" fill="#6D28D9" fillOpacity="0.8"/>
    <path d="M19 38c0-5.5 4-9 9-9s9 3.5 9 9" fill="#6D28D9" fillOpacity="0.8"/>
    {/* front person */}
    <circle cx="19" cy="19" r="6" fill="#A78BFA"/>
    <path d="M7 38c0-6 5-10 12-10s12 4 12 10" fill="#A78BFA"/>
  </svg>
);

const TaskDoneStatIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="24" fill="#2D1B00"/>
    <rect x="11" y="11" width="26" height="26" rx="7" fill="#F59E0B"/>
    <path d="M15 24.5L21 30.5L33 18" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PointsStatIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="24" fill="#1C1000"/>
    <circle cx="24" cy="24" r="15" fill="#D97706"/>
    <circle cx="24" cy="24" r="11" fill="#FBBF24"/>
    <polygon
      points="24,14 26.2,20.5 33,20.5 27.5,24.5 29.8,31 24,27 18.2,31 20.5,24.5 15,20.5 21.8,20.5"
      fill="#D97706"
    />
  </svg>
);

const RewardsStatIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="24" fill="#0B1829"/>
    {/* robot head */}
    <rect x="13" y="14" width="22" height="16" rx="5" fill="#1E40AF" fillOpacity="0.5"/>
    <rect x="13" y="14" width="22" height="16" rx="5" stroke="#60A5FA" strokeWidth="1.5"/>
    {/* eyes */}
    <rect x="17" y="19" width="5" height="5" rx="2.5" fill="#93C5FD"/>
    <rect x="26" y="19" width="5" height="5" rx="2.5" fill="#93C5FD"/>
    {/* mouth */}
    <path d="M19 28.5 Q24 31 29 28.5" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
    {/* antenna */}
    <line x1="24" y1="14" x2="24" y2="10" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="9" r="2" fill="#3B82F6"/>
    {/* neck + base */}
    <rect x="21" y="30" width="6" height="5" rx="1.5" fill="#1D4ED8"/>
    <rect x="14" y="35" width="20" height="3.5" rx="1.5" fill="#1E3A8A"/>
  </svg>
);

// ── Main Component ────────────────────────────────────────────────

export default function Home() {
  const features = [
    {
      title: "Smart Tasks",
      desc: "Organize and track your tasks easily.",
      Icon: SmartTasksIcon,
      bg: "from-[#7B61FF] to-[#9B6DFF]",
      glow: "rgba(123,97,255,0.5)",
    },
    {
      title: "Earn Points",
      desc: "Complete tasks and earn points.",
      Icon: EarnPointsIcon,
      bg: "from-[#D97706] to-[#F59E0B]",
      glow: "rgba(245,158,11,0.5)",
    },
    {
      title: "Bucket List",
      desc: "Unlock rewards from your bucket list.",
      Icon: BucketListIcon,
      bg: "from-[#D946EF] to-[#A855F7]",
      glow: "rgba(217,70,239,0.5)",
    },
    {
      title: "AI Buddy",
      desc: "Your personal buddy to keep you on track.",
      Icon: AIBuddyIcon,
      bg: "from-[#06B6D4] to-[#3B82F6]",
      glow: "rgba(59,130,246,0.5)",
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Users",     Icon: UsersStatIcon,    color: "text-[#A855F7]" },
    { number: "1M+",  label: "Tasks Completed",  Icon: TaskDoneStatIcon, color: "text-[#FACC15]" },
    { number: "500K+",label: "Points Earned",    Icon: PointsStatIcon,   color: "text-[#FF5EA8]" },
    { number: "100+", label: "Rewards Unlocked", Icon: RewardsStatIcon,  color: "text-[#22D3EE]" },
  ];

  return (
    <div className="overflow-hidden bg-[#050816] text-white">

      {/* ── HERO ── */}
      <div className="relative min-h-screen overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Left-side overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(5,8,22,0.95) 0%, rgba(5,8,22,0.80) 40%, rgba(5,8,22,0.30) 65%, transparent 100%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: "320px",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(5,8,22,0.60) 50%, #050816 100%)",
          }}
        />

        {/* Twinkling stars */}
        {[
          { top: "10%",  left:  "8%",  color: "#fff"     },
          { top: "18%",  left:  "48%", color: "#f9a8d4"  },
          { top: "12%",  right: "5%",  color: "#fff"     },
          { top: "40%",  right: "3%",  color: "#c4b5fd"  },
          { bottom:"32%",left:  "4%",  color: "#fff"     },
          { bottom:"20%",left:  "20%", color: "#FFD966"  },
        ].map((s, i) => (
          <motion.span
            key={i}
            className="absolute z-20 text-lg font-black pointer-events-none"
            style={{ ...s, textShadow: `0 0 10px ${s.color}` }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
            transition={{ repeat: Infinity, duration: 2.5 + i * 0.5 }}
          >✦</motion.span>
        ))}

        {/* ── NAVBAR ── */}
        <div className="relative z-30 px-8 lg:px-14 pt-6">
          <nav className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFB800] flex items-center justify-center shadow-[0_0_25px_rgba(255,184,0,0.5)]">
                <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                  <rect x="8" y="13" width="24" height="18" rx="5" fill="#1a0a00"/>
                  <rect x="13" y="18" width="5" height="5" rx="2.5" fill="#00CFFF"/>
                  <rect x="22" y="18" width="5" height="5" rx="2.5" fill="#00CFFF"/>
                  <path d="M15 28 Q20 31.5 25 28" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="20" y1="13" x2="20" y2="9" stroke="#1a0a00" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="20" cy="7.5" r="2" fill="#1a0a00"/>
                </svg>
              </div>
              <h1 className="text-[22px] font-black tracking-tight">
                <span className="font-black">Buddy</span>{" "}
                <span className="font-light">To-Do</span>
              </h1>
            </div>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-white/80">
              <a className="text-[#C084FC] border-b-2 border-[#C084FC] pb-1 cursor-pointer">Home</a>
              {["Features", "How It Works", "Pricing", "About"].map((item) => (
                <a key={item} className="hover:text-white transition-all duration-300 cursor-pointer">{item}</a>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/signup"
              className="px-7 py-3 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white text-[15px] font-bold shadow-[0_0_28px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </nav>

          {/* ── HERO TEXT ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 max-w-[560px]"
          >
            <h1 className="leading-[1.05] tracking-[-2px]">
              <span className="block text-[64px] font-black text-white">Plan Together.</span>
              <span className="block mt-1 text-[64px] font-black bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent pb-2">
                Achieve Together.
              </span>
            </h1>

            <p className="mt-5 text-[17px] leading-[1.9] text-white/70 max-w-[420px]">
              Stay organized, complete tasks, earn points and unlock rewards
              from your bucket list with your AI buddy.
            </p>

            <div className="flex gap-4 mt-9">
              <button className="px-9 py-4 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white text-[16px] font-bold shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300">
                Get Started
              </button>
              <button className="px-9 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white text-[16px] font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full border-2 border-white/50 flex items-center justify-center">
                  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 fill-white ml-0.5">
                    <polygon points="2,1 9,5 2,9"/>
                  </svg>
                </span>
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── FEATURE CARDS + STATS ── */}
        <div className="relative z-30 px-8 lg:px-14 mt-16 pb-10">

          {/* Feature cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map(({ title, desc, Icon, bg, glow }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-[20px] border border-white/10 bg-[#0A0F2E]/70 backdrop-blur-xl p-5 shadow-[0_0_25px_rgba(0,0,0,0.4)] flex items-center gap-4"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${bg} flex items-center justify-center flex-shrink-0`}
                  style={{ boxShadow: `0 0 18px ${glow}` }}
                >
                  <Icon />
                </div>
                <div>
                  <h3 className="text-[16px] font-extrabold leading-tight">{title}</h3>
                  <p className="mt-1 text-[13px] leading-[1.6] text-white/55">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {stats.map(({ number, label, Icon, color }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-[18px] border border-white/10 bg-[#0A0F2E]/70 backdrop-blur-xl px-5 py-4 flex items-center gap-4 shadow-[0_0_25px_rgba(0,0,0,0.4)]"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                  <Icon />
                </div>
                <div>
                  <h2 className={`text-[30px] font-black leading-none ${color}`}>{number}</h2>
                  <p className="text-[12px] text-white/55 mt-1">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}