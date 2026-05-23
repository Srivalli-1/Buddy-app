import { motion, AnimatePresence } from "framer-motion";

function AchievementPopup({ show }) {

  return (
    <AnimatePresence>

      {show && (

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed top-10 right-10 z-[200]"
        >

          <div className="bg-[#0d1324] border border-yellow-400/30 rounded-3xl p-6 shadow-[0_0_50px_rgba(250,204,21,0.4)] w-[350px]">

            {/* Top */}
            <div className="flex items-center gap-4">

              <div className="text-5xl">
                🏆
              </div>

              <div>

                <h1 className="text-2xl font-bold text-yellow-400">
                  Achievement Unlocked!
                </h1>

                <p className="text-gray-400 mt-1">
                  Task Warrior Badge Earned ⚔️
                </p>

              </div>

            </div>

            {/* Bottom */}
            <div className="mt-6 bg-[#111827] rounded-2xl p-4">

              <p className="text-gray-300 leading-relaxed">
                You completed enough tasks to unlock
                your first achievement 🚀
              </p>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default AchievementPopup;