import { AnimatePresence, motion } from "framer-motion";

type PageFlipIntroProps = {
  show: boolean;
  title: string;
  gradientClassName: string;
  titleClassName?: string;
};

export default function PageFlipIntro({
  show,
  title,
  gradientClassName,
  titleClassName = "text-5xl sm:text-7xl lg:text-9xl font-extrabold text-white drop-shadow-lg text-center px-4",
}: PageFlipIntroProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-base-100 flex items-center justify-center"
          style={{ perspective: "1200px" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`w-full h-full ${gradientClassName} flex items-center justify-center`}
            initial={{
              rotateY: 0,
              rotateX: 0,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              rotateY: -90,
              rotateX: 15,
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.77, 0, 0.18, 1],
            }}
          >
            <span className={titleClassName}>{title}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
