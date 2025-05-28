import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const github = "https://github.com/JeongwoongPyeon";
  const goToReviews = () => {
    navigate('/reviews');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-6xl font-extrabold mb-12 text-center">Contact</h2>
      
      <div className="flex flex-col gap-6">
        <button 
          className="btn text-black border-black btn-lg"
          onClick={goToReviews}
        >
          팀원리뷰 확인
        </button>
        
        {/* 다른 연락처 정보들 */}
        <div className="text-center space-y-4">
          <p className="text-xl">📧 이메일: like5518@gmail.com</p>
          <p className="text-xl">🔗 GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
