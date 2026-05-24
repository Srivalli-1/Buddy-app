import { motion, AnimatePresence } from "framer-motion";

function XPFloat({ show, points }) {

  return (
    <AnimatePresence>

      {show && (

        <motion.div
          initial={{
            opacity: 0,
            y: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            y: -120,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="fixed bottom-32 right-24 z-[300]"
        >

          <div className="text-5xl font-bold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">

            +{points} XP ✨

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default XPFloat;