import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NotificationPanel() {

  const [open, setOpen] = useState(false);

  const notifications = [
    "🎯 You completed 3 tasks today!",
    "🔥 5-day streak maintained!",
    "💎 New reward unlocked!",
    "🤖 Buddy Bot sent motivation!",
  ];

  return (
    <div className="relative">

      {/* Bell Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="relative bg-[#111827] w-12 h-12 rounded-full flex items-center justify-center border border-cyan-500/20"
      >

        🔔

        {/* Notification Dot */}
        <div className="absolute top-2 right-2 w-3 h-3 bg-red-400 rounded-full"></div>

      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-4 w-[320px] bg-[#0d1324]/95 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-5 shadow-2xl z-50"
          >

            <h1 className="text-2xl font-bold text-cyan-400 mb-5">
              Notifications 🔔
            </h1>

            <div className="flex flex-col gap-4">

              {notifications.map((note, index) => (

                <div
                  key={index}
                  className="bg-[#111827] rounded-2xl p-4 text-gray-300"
                >
                  {note}
                </div>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

export default NotificationPanel;