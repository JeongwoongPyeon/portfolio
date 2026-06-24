import "./App.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
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
        gradientClassName="bg-gradient-to-br from-slate-950 via-blue-800 to-emerald-600"
      />

      {!showFlip && (
        <main className="min-h-screen overflow-hidden bg-[#f7f9fc] text-slate-950">
          <section
            id="about"
            className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8 lg:px-10"
          >
            <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-sky-100/80 to-transparent" />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.95fr)]">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-left"
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-sky-600">
                  Frontend Developer
                </p>
                <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  안녕하세요.
                  <span className="block">편정웅입니다.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  <span className="block">
                    기본을 탄탄히 이해하고 사용자 경험을 세심하게 다듬습니다.
                  </span>
                  <span className="mt-1 block">
                    데이터와 인터페이스가 자연스럽게 이어지는 웹 서비스를
                    만들고 싶습니다.
                  </span>
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex h-12 items-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    프로젝트 보기
                    <ArrowDown size={18} aria-hidden="true" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
                  >
                    연락하기
                    <Mail size={18} aria-hidden="true" />
                  </a>
                </div>

                <dl className="mt-10 hidden max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-left sm:grid">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Focus
                    </dt>
                    <dd className="mt-2 text-sm font-bold text-slate-800">
                      React UI
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Training
                    </dt>
                    <dd className="mt-2 text-sm font-bold text-slate-800">
                      SSAFY 12기
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Base
                    </dt>
                    <dd className="mt-2 text-sm font-bold text-slate-800">
                      Data Science
                    </dd>
                  </div>
                </dl>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                className="relative flex min-h-[320px] w-full items-end justify-center lg:min-h-[680px] lg:justify-end"
              >
                <div className="absolute bottom-0 left-1/2 h-px w-[78%] -translate-x-1/2 bg-slate-300/80" />
                <img
                  src="/profile-cutout.png"
                  alt="편정웅 프로필 사진"
                  className="relative z-10 h-[min(76vh,730px)] w-auto max-w-full object-contain object-bottom drop-shadow-[0_28px_40px_rgba(15,23,42,0.22)]"
                />
              </motion.div>
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <AboutMe />
          </motion.div>

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
        </main>
      )}
    </>
  );
}

export default App;
