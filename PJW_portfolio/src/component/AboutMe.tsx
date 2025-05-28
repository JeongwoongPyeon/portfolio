import { User, Calendar, GraduationCap, BookOpen, MapPin, Mail } from "lucide-react";

export default function AboutMe() {

  return (
    <section className="w-full max-w-5xl mt-16 px-4">
      <h2 className="text-4xl font-extrabold mb-6 text-left">About Me</h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
        {/* 프로필 아바타 */}
        <div className="flex justify-center items-center h-full">
          <div className="avatar">
            <div className="w-40 h-48 rounded-xs ring-offset-2 bg-base-200 flex items-center justify-center">
              <img src="/Profile.jpg" alt="profile" />
              <span className="text-gray-400">사진</span>
            </div>
          </div>
        </div>
        {/* 정보 카드 */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-sm p-4">
            <div className="font-bold flex items-center gap-2"><User size={18}/>이름</div>
            <div className="mt-8">편정웅</div>
          </div>
          <div className="card bg-base-100 shadow-sm p-4">
            <div className="font-bold flex items-center gap-2"><Calendar size={18}/>생년월일</div>
            <div className="mt-8">1999. 04. 13</div>
          </div>
          <div className="card bg-base-100 shadow-sm p-4 md:col-span-1">
            <div className="font-bold flex items-center gap-2"><GraduationCap size={18}/>학력</div>
            <div className="mt-8">
              성균관대학교<br />데이터사이언스 학사
              <div className="text-xs text-gray-500">2018.3~2024.2</div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm p-4">
            <div className="font-bold flex items-center gap-2"><BookOpen size={18}/>교육사항</div>
            <div className="mt-8">삼성청년SW아카데미 12기 수료<br /><span className="text-xs text-gray-500">(24.1~24.6)</span></div>
          </div>
          <div className="card bg-base-100 shadow-sm p-4">
            <div className="font-bold flex items-center gap-2"><MapPin size={18}/>위치</div>
            <div className="mt-8">
              서울특별시 광진구<br />
              충청남도 아산시
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm p-4">
            <div className="font-bold flex items-center gap-2"><Mail size={18}/>Contact</div>
            <div className="mt-8">like5518@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
