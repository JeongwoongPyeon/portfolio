import {
  BookOpen,
  Calendar,
  GraduationCap,
  Mail,
  MapPin,
  User,
} from "lucide-react";

const profileItems = [
  {
    icon: User,
    label: "이름",
    value: "편정웅",
  },
  {
    icon: Calendar,
    label: "생년월일",
    value: "1999. 04. 13",
  },
  {
    icon: GraduationCap,
    label: "학력",
    value: "성균관대학교 데이터사이언스학과 학사",
    caption: "2018. 03 - 2024. 08",
  },
  {
    icon: BookOpen,
    label: "교육사항",
    value: "삼성청년SW아카데미 12기 수료",
    caption: "2024. 06 - 2025. 06",
  },
  {
    icon: MapPin,
    label: "위치",
    value: "서울특별시 광진구 / 충청남도 아산시",
  },
  {
    icon: Mail,
    label: "Contact",
    value: "like5518@gmail.com",
  },
];

export default function AboutMe() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
      <div className="mb-9 text-left">
        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-emerald-600">
          About Me
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
          성실하게 쌓아온 기본기
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profileItems.map(({ icon: Icon, label, value, caption }) => (
          <article
            key={label}
            className="rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <Icon size={18} aria-hidden="true" />
              {label}
            </div>
            <p className="mt-5 text-base font-bold leading-7 text-slate-900">
              {value}
            </p>
            {caption && (
              <p className="mt-2 text-sm leading-6 text-slate-500">{caption}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
