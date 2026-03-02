import { User, Calendar, GraduationCap, BookOpen, MapPin, Mail } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="w-full max-w-5xl mt-16 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-left">About Me</h2>

      <div className="rounded-3xl border border-base-300 bg-base-100/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
          {/* 프로필 아바타 */}
          <div className="flex justify-center lg:justify-start items-start">
            <div className="w-44 sm:w-52 aspect-[4/5] rounded-2xl overflow-hidden border border-base-300 shadow-md bg-base-200">
              <img src="/Profile.jpg" alt="편정웅 프로필 사진" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* 정보 카드 */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="card bg-base-100 border border-base-300 shadow-sm p-5 min-h-36">
              <div className="font-bold flex items-center gap-2 text-base-content/90">
                <User size={18} />이름
              </div>
              <div className="mt-6 text-base">편정웅</div>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow-sm p-5 min-h-36">
              <div className="font-bold flex items-center gap-2 text-base-content/90">
                <Calendar size={18} />생년월일
              </div>
              <div className="mt-6 text-base">1999. 04. 13</div>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow-sm p-5 min-h-36 sm:col-span-2 xl:col-span-1">
              <div className="font-bold flex items-center gap-2 text-base-content/90">
                <GraduationCap size={18} />학력
              </div>
              <div className="mt-6 text-sm leading-relaxed">
                성균관대학교
                <br />
                데이터사이언스 학사
                <div className="text-xs text-base-content/60 mt-1">2018.3 ~ 2024.2</div>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow-sm p-5 min-h-36">
              <div className="font-bold flex items-center gap-2 text-base-content/90">
                <BookOpen size={18} />교육사항
              </div>
              <div className="mt-6 text-sm leading-relaxed">
                삼성청년SW아카데미 12기 수료
                <div className="text-xs text-base-content/60 mt-1">2024.1 ~ 2024.6</div>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow-sm p-5 min-h-36">
              <div className="font-bold flex items-center gap-2 text-base-content/90">
                <MapPin size={18} />위치
              </div>
              <div className="mt-6 text-sm leading-relaxed">
                서울특별시 광진구
                <br />
                충청남도 아산시
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow-sm p-5 min-h-36">
              <div className="font-bold flex items-center gap-2 text-base-content/90">
                <Mail size={18} />Contact
              </div>
              <div className="mt-6 text-sm break-all">like5518@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
