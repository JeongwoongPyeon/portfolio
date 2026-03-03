import { reviews } from "../data/review";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Job = {
  frontend: "프론트엔드 개발자",
  backend: "백엔드 개발자",
  ai: "AI 엔지니어",
};

const Review = () => {
  const navigate = useNavigate();
  const [showFlip, setShowFlip] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleCarouselRef = useRef<HTMLDivElement>(null);
  const contentCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlip(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const moveSlide = (nextIndex: number) => {
    setCurrentIndex(nextIndex);

    if (titleCarouselRef.current) {
      titleCarouselRef.current.scrollLeft = nextIndex * titleCarouselRef.current.offsetWidth;
    }

    if (contentCarouselRef.current) {
      contentCarouselRef.current.scrollLeft = nextIndex * contentCarouselRef.current.offsetWidth;
    }
  };

  const movePrev = () => {
    const prevIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    moveSlide(prevIndex);
  };

  const moveNext = () => {
    const nextIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    moveSlide(nextIndex);
  };

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
              className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center"
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
              <span className="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-white drop-shadow-lg text-center px-4">
                Team Reviews
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showFlip && (
        <div className="w-full min-h-screen pt-24 pb-8 px-4 sm:px-6 flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4">
              {/* 상단 타이틀 */}
              <div className="flex flex-col items-center sm:items-start justify-center gap-2 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <div ref={titleCarouselRef} className="carousel w-72 sm:w-80 h-14 sm:h-16">
                    {reviews.map((review, index) => (
                      <div
                        key={review.role}
                        id={`title-slide${index + 1}`}
                        className="carousel-item w-full flex items-center justify-center sm:justify-start"
                      >
                        <span>{Job[review.role as keyof typeof Job]}</span>
                      </div>
                    ))}
                  </div>
                  <span>는 저를 이렇게 생각했습니다</span>
                </div>
              </div>

              {/* 돌아가기 버튼 */}
              <div className="flex justify-center sm:justify-end">
                <button
                  className="btn btn-md sm:btn-lg bg-slate-900 text-white border-slate-900 hover:bg-slate-800 hover:border-slate-800 font-bold shadow-md hover:shadow-lg"
                  onClick={goBack}
                >
                  ← 포트폴리오로 돌아가기
                </button>
              </div>
            </div>
          </div>

          {/* 리뷰 내용 캐러셀 */}
          <div className="w-full max-w-6xl flex-1 relative mt-2">
            <div ref={contentCarouselRef} className="carousel w-full h-full">
              {reviews.map((review, index) => (
                <div key={review.role} id={`slide${index + 1}`} className="carousel-item relative w-full">
                  <div className="flex flex-col items-center justify-start w-full h-full py-4 sm:py-6">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto max-h-[60vh] pr-1">
                      {review.comments.map((comment, commentIndex) => (
                        <div key={commentIndex} className="card bg-base-100 shadow-xl border border-gray-300">
                          <div className="card-body">
                            <div className="flex justify-between items-start mb-4 gap-3">
                              <h3 className="card-title text-xl lg:text-2xl">{comment.reviewer_id}</h3>
                              <div className="flex flex-wrap gap-2 justify-end">
                                {comment.projects.map((project, projectIndex) => (
                                  <span key={projectIndex} className="badge badge-primary text-xs">
                                    {project}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <p className="text-base lg:text-lg leading-relaxed">{comment.review_content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute flex justify-between left-1 right-1 sm:left-3 sm:right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <button
                className="btn btn-circle btn-ghost bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg text-gray-700 hover:text-black transition-all duration-200 pointer-events-auto"
                onClick={movePrev}
              >
                ❮
              </button>
              <button
                className="btn btn-circle btn-ghost bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg text-gray-700 hover:text-black transition-all duration-200 pointer-events-auto"
                onClick={moveNext}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Review;
