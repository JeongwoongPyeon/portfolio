export interface Skill {
    skill: string;
    level: number; // 1~5 등급
    description: string;
    color: string; // 색상(예: '#F7DF1E')
    type: string; // 탭 분류
    icon?: string; // 아이콘 파일명 (public/skills/)
  }

  export const skills: Skill[] = [
    {
      skill: "JavaScript",
      level: 3,
      description: "프론트엔드 개발에 주로 사용하였습니다. 여러 훅을 활용한 경험이 있습니다.",
      color: "#ffffff",
      type: "언어",
      icon: "javascript.svg"
    },
    {
      skill: "TypeScript",
      level: 3,
      description: "프로젝트에서 타입 안정성을 확보하기 위해 사용하였습니다. 인터페이스, 제네릭, 타입 추론 등을 이해하며, 타입 모듈화 경험이 있습니다.",
      color: "#ffffff",
      type: "언어",
      icon: "typescript.svg"
    },
    {
      skill: "Python",
      level: 4,
      description: "백엔드 개발에서 Django 프레임워크를 사용해 RESTful API를 개발했으며, Python 기반 데이터 분석 및 시각화 경험이 있습니다.",
      color: "#ffffff",
      type: "언어",
      icon: "python.svg"
    },
    {
      skill: "HTML",
      level: 3,
      description: "기본적인 html 문법을 참고하여 작성할 수 있습니다.",
      color: "#ffffff",
      type: "언어",
      icon: "HTML5_logo_and_wordmark.svg"
    },
    {
      skill: "CSS",
      level: 3,
      description: "Flex, Grid, 미디어쿼리를 활용한 반응형 디자인, 애니메이션 등 레이아웃 구현 경험이 있습니다.",
      color: "#ffffff",
      type: "언어",
      icon: "CSS3_logo_and_wordmark.svg"
    },
    {
      skill: "Java",
      level: 2,
      description: "공식 문서를 참고하여 사용하고 있습니다.",
      color: "#ffffff",
      type: "언어",
      icon: "java.svg"
    },
    {
      skill: "React",
      level: 4,
      description: "세 프로젝트의 프론트엔드 개발을 진행했습니다. Context API를 활용한 전역 상태관리, UseOptimistic을 활용한 UX 개선 등 다양한 경험이 있습니다.",
      color: "#ffffff",
      type: "프론트엔드",
      icon: "react.svg"
    },
    {
      skill: "Vue",
      level: 3,
      description: "프로젝트 하나의 FE개발을 진행했습니다. pinia 활용 상태관리, props와 emit을 활용한 구조 이해, v-문법에 익숙합니다.",
      color: "#ffffff",
      type: "프론트엔드",
      icon: "Vue.js_Logo_2.svg"
    },
    {
      skill: "React-Query",
      level: 2,
      description: "서버 데이터에 대한 상태 관리에 활용하였습니다.",
      color: "#ffffff",
      type: "프론트엔드",
      icon: "react-query.svg"
    },
    {
      skill: "Redux",
      level: 3,
      description: "기초적 상태관리와 thunk를 활용한 서버 데이터 비동기 처리 경험이 있습니다.",
      color: "#ffffff",
      type: "프론트엔드",
      icon: "redux.svg"
    },
    { 
      skill: "Zustand",
      level: 3,
      description: "간단한 프론트엔드 내부 상태 관리 경험이 있습니다.",
      color: "#ffffff",
      type: "프론트엔드",
      icon: "zustand.svg"
    },
    {
      skill: "TailwindCSS",
      level: 4,
      description: "프로젝트 css 작성에 주로 활용하였습니다. 커스텀 클래스 작성 경험이 있습니다.",
      color: "#ffffff",
      type: "프론트엔드",
      icon: "Tailwind_CSS_Logo.svg"
    },
    {
      skill: "Django",
      level: 3,
      description: "API 설계, RESTful API 기반으로 CRUD, JWT 인증 등 개발 경험이 있습니다. Django ORM의 Fetch join을 활용한 성능 개선 경험이 있습니다.",
      color: "#ffffff",
      type: "백엔드",
      icon: "django.svg"
    },
    {
      skill: "FastAPI",
      level: 2,
      description: "간단한 API 서버 구축 경험이 있습니다.",
      color: "#ffffff",
      type: "백엔드",
      icon: "FastAPI.svg"
    },
    {
      skill: "R",
      level: 3,
      description: "Caret 패키지를 활용한 데이터 분석 경험, ggplot2 패키지를 활용한 데이터 시각화 경험이 있습니다.",
      color: "#ffffff",
      type: "Data",
      icon: "r.svg"
    },
    {
      skill: "Tableau",
      level: 3,
      description: "기본적 바, 그래프 차트 및 스파크라인 차트, 지도 시각화를 구현하여, 이를 바탕으로 대시보드를 제작한 경험이 있습니다.",
      color: "#ffffff",
      type: "Data",
      icon: "Tableau_Logo.png"
    },
    {
      skill: "MySQL",
      level: 2,
      description: "관계형 데이터베이스 기본 쿼리 작성 및 데이터 관리 경험이 있습니다.",
      color: "#ffffff",
      type: "Data",
      icon: "mysql.svg"
    },
    {
      skill: "Git",
      level: 3,
      description: "버전 관리, 브랜치 전략, 협업 경험이 있습니다.",
      color: "#ffffff",
      type: "ETC",
      icon: "git.svg"
    },
    {
      skill: "Jira",
      level: 3,
      description: "JIRA를 사용한 이슈 관리, 깃 연동, 팀 협업 경험이 있습니다.",
      color: "#ffffff",
      type: "ETC",
      icon: "Jira.svg"
    }
  ];