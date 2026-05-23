import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FloatingBot() {

  const [open, setOpen] = useState(false);

  return (
    <>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-cyan-400 w-20 h-20 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.7)] flex items-center justify-center"
      >

        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
          alt="bot"
          className="w-12"
        />

      </motion.button>

      {/* Popup */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-32 right-6 z-50 w-[320px] bg-[#0d1324]/90 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl"
          >

            <div className="flex items-center gap-4">

              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                alt="robot"
                className="w-16"
              />

              <div>

                <h1 className="text-cyan-400 font-bold text-xl">
                  Buddy Bot 🤖
                </h1>

                <p className="text-gray-400 text-sm">
                  Your productivity companion
                </p>

              </div>

            </div>

            {/* Message */}
            <div className="mt-6 bg-[#111827] rounded-2xl p-4">

              <p className="text-gray-300 leading-relaxed">
                🚀 Keep going Srivalli!  
                Every completed task brings you closer
                to your dream rewards ✨
              </p>

            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">

              <button className="flex-1 bg-cyan-400 text-black py-3 rounded-2xl font-semibold hover:scale-105 transition">

                View Goals

              </button>

              <button
                onClick={() => setOpen(false)}
                className="flex-1 bg-[#111827] py-3 rounded-2xl hover:bg-red-500/20 transition"
              >

                Close

              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}

export default FloatingBot;