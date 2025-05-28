import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetail() {
  const [showFlip, setShowFlip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlip(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showFlip && (
          <motion.div
            className="fixed inset-0 z-50 bg-base-100 flex items-center justify-center"
            style={{ perspective: "1200px" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
              initial={{
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                opacity: 1
              }}
              animate={{
                rotateY: -90,
                rotateX: 15,
                scale: 0.8,
                opacity: 0
              }}
              transition={{
                duration: 0.8,
                ease: [0.77, 0, 0.18, 1]
              }}
            >
              <span className="text-9xl font-extrabold text-white drop-shadow-lg">Woong's Project</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div 
        className="flex bg-yellow-100"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="text-3xl font-bold text-yellow-900">ProjectDetail</div>
      </motion.div>
    </>
  );
}

