import { useState } from "react";
import { skills } from "../data/skills";

const tabs = ["언어", "프론트엔드", "백엔드", "Data", "ETC"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("언어");

  // 현재 탭에 해당하는 스킬만 필터링
  const filteredSkills = skills.filter((s) => s.type === activeTab);

  return (
    <section className="w-full max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-left text-4xl">Skills</h2>
      {/* 탭 UI */}
      <div className="flex w-full mb-8 rounded-xs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 font-semibold border-b-4 transition-colors duration-200 rounded-sm
              ${activeTab === tab
                ? "border-primary bg-primary"
                : "border-gray-200 bg-gray-100 text-gray-700"}
            `}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* 스킬 리스트 */}
      <div className="flex flex-col gap-8">
        {filteredSkills.map((skill) => (
          <div key={skill.skill} className="flex items-start gap-6">
            {/* 아이콘/로고: 직접 이미지 경로 지정 (예시: public/skills/javascript.png) */}
            <div
              className="w-16 h-16 rounded-md flex-shrink-0 bg-white flex items-center justify-center"
              style={{ backgroundColor: skill.color }}
            >
              {skill.icon && (
                <img
                  src={`/skills/${skill.icon}`}
                  alt={skill.skill}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              )}
            </div>
            <div>
              <div className="text-xl font-bold mb-1 flex items-center gap-2">
                {skill.skill}
                {/* 레벨 시각화: 별 5개 중 level만큼 채움 */}
                <span className="flex items-center">
                  {[1,2,3,4,5].map((n) => (
                    <svg
                      key={n}
                      className={`w-5 h-5 ${n <= skill.level ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </span>
              </div>
              <div className="text-gray-700 text-base mb-1">{skill.description}</div>
              {/* 레벨 등급 등 추가 가능 */}
            </div>
          </div>
        ))}
        {filteredSkills.length === 0 && (
          <div className="text-gray-400 text-center py-8">아직 등록된 스킬이 없습니다.</div>
        )}
      </div>
    </section>
  );
}
