import './App.css'
import { motion, AnimatePresence } from "framer-motion";
import  { useEffect, useState } from 'react';
import AboutMe from './component/AboutMe';
import Skills from './component/Skills';
import ProjectList from './component/Project/ProjectList';
import Contact from './Contact/Contact';

function App() {
  const [showFlip, setShowFlip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlip(false), 700);
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
            transition={{ duration: 0.8 }}
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
              <span className="text-9xl font-extrabold text-white drop-shadow-lg">Woong's Portfolio</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!showFlip && (
        <>
          <section id="about">
            <div className="mt-24 w-full flex flex-col justify-start items-start">
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-7xl font-bold text-left bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              >
                반갑습니다<br />기본을 중요시하는 프론트엔드 개발자<br />편정웅입니다
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className=""
              >
                <AboutMe />
              </motion.div>
              <div className="card">
              </div>
            </div>
          </section> 
          <section id="skills">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Skills />
            </motion.div>
          </section>
          <section id="projects">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectList />
            </motion.div>
          </section>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
          <section id="contact">
            <Contact />
          </section>
          </motion.div>
        </>
      )}
    </>
  )
}

export default App
