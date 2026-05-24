import { motion, AnimatePresence } from "framer-motion";

function LevelPopup({ show, level }) {

  return (
    <AnimatePresence>

      {show && (

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >

          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.4 }}
            className="bg-[#0d1324] border border-cyan-500/20 rounded-[40px] p-10 text-center w-[90%] max-w-[500px] shadow-[0_0_60px_rgba(34,211,238,0.4)]"
          >

            {/* Glow */}
            <div className="w-32 h-32 bg-cyan-400/20 rounded-full blur-[80px] absolute"></div>

            {/* Emoji */}
            <div className="text-7xl mb-6">
              🚀
            </div>

            <h1 className="text-5xl font-bold text-cyan-400">
              LEVEL UP!
            </h1>

            <p className="text-gray-400 text-xl mt-5">
              You reached
            </p>

            <h2 className="text-6xl font-bold text-white mt-4">
              Level {level}
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Your consistency and focus are paying off ✨
            </p>

            <button className="mt-8 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">

              AWESOME 🎉

            </button>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default LevelPopup;