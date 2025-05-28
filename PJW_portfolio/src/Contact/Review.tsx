import { reviews } from "../data/review";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';

const Job = {
    "frontend": "프론트엔드 개발자",
    "backend": "백엔드 개발자",
    "ai": "AI 엔지니어",
}

const Review = () => {
  const navigate = useNavigate();
  const [showFlip, setShowFlip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlip(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
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
              <span className="text-9xl font-extrabold text-white drop-shadow-lg">Team Reviews</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!showFlip && (
        <div className="w-full h-full flex flex-col items-center">
          {/* 고정 제목 */}
          <div className="flex flex-col items-center justify-center pt-8 pb-4">
            <div className="text-4xl font-extrabold text-primary flex items-center">
              <div className="carousel w-80 h-24">
                {reviews.map((review, index) => (
                  <div key={review.role} id={`title-slide${index + 1}`} className="carousel-item w-full flex items-center justify-end">
                    <span>{Job[review.role as keyof typeof Job]}</span>
                  </div>
                ))}
              </div>
              <span>는 저를 이렇게 생각했습니다</span>
            </div>
          </div>
                    {/* 돌아가기 버튼 */}
                    <div className="flex justify-center w-full py-4">
            <button 
              className="btn bg-black text-black btn-lg"
              onClick={goBack}
            >
              ← 돌아가기
            </button>
          </div>
          {/* 리뷰 내용 캐러셀 */}
          <div className="flex-1">
            <div className="carousel w-full h-full">
              {reviews.map((review, index) => (
                <div key={review.role} id={`slide${index + 1}`} className="carousel-item relative w-full">
                  <div className="flex flex-col items-center justify-start w-full h-full px-8 py-8 b">
                    {/* 리뷰 리스트 */}
                    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto">
                      {review.comments.map((comment, commentIndex) => (
                        <div key={commentIndex} className="card bg-base-100 shadow-xl border-1 border-gray-300">
                          <div className="card-body">
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="card-title text-xl lg:text-2xl">{comment.reviewer_id}</h3>
                              <div className="flex flex-wrap gap-2">
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
                  
                  {/* 캐러셀 네비게이션 */}
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 lg:left-5 lg:right-5 top-1/2 z-10">
                    <button 
                      className="btn btn-circle btn-ghost bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg text-gray-700 hover:text-black transition-all duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const prevIndex = index === 0 ? reviews.length - 1 : index - 1;
                        
                        // 제목 캐러셀 이동
                        const titleCarousel = document.querySelector('.carousel') as HTMLElement;
                        if (titleCarousel) {
                          titleCarousel.scrollLeft = prevIndex * titleCarousel.offsetWidth;
                        }
                        
                        // 내용 캐러셀 이동
                        const contentCarousel = document.querySelectorAll('.carousel')[1] as HTMLElement;
                        if (contentCarousel) {
                          contentCarousel.scrollLeft = prevIndex * contentCarousel.offsetWidth;
                        }
                      }}
                    >
                      ❮
                    </button>
                    <button 
                      className="btn btn-circle btn-ghost bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg text-gray-700 hover:text-black transition-all duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const nextIndex = index === reviews.length - 1 ? 0 : index + 1;
                        
                        // 제목 캐러셀 이동
                        const titleCarousel = document.querySelector('.carousel') as HTMLElement;
                        if (titleCarousel) {
                          titleCarousel.scrollLeft = nextIndex * titleCarousel.offsetWidth;
                        }
                        
                        // 내용 캐러셀 이동
                        const contentCarousel = document.querySelectorAll('.carousel')[1] as HTMLElement;
                        if (contentCarousel) {
                          contentCarousel.scrollLeft = nextIndex * contentCarousel.offsetWidth;
                        }
                      }}
                    >
                      ❯
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          

        </div>
      )}
    </>
  );
};

export default Review;


