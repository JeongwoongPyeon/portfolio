import "./App.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AboutMe from "./component/AboutMe";
import Skills from "./component/Skills";
import ProjectList from "./component/Project/ProjectList";
import Contact from "./Contact/Contact";
import PageFlipIntro from "./component/PageFlipIntro";

function App() {
  const [showFlip, setShowFlip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlip(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageFlipIntro
        show={showFlip}
        title="Woong's Portfolio"
        gradientClassName="bg-gradient-to-br from-blue-500 to-purple-600"
      />

      {!showFlip && (
        <>
          <section id="about">
            <div className="mt-24 w-full flex flex-col justify-start items-start">
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-left bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight"
              >
                반갑습니다
                <br />
                기본을 중요시하는 프론트엔드 개발자
                <br />
                편정웅입니다
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className=""
              >
                <AboutMe />
              </motion.div>
              <div className="card"></div>
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
  );
}

export default App;
