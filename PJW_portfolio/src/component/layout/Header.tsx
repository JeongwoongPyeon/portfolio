import { useEffect, useState } from "react";

const menuItems = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50 text-grey-700">
      <div className="navbar-start">
        <a className="text-2xl font-extrabold tracking-widest" href="#">
          PyeonJW
        </a>
      </div>
      {/* 데스크탑 메뉴 */}
      {!isMobile && (
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="font-semibold">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* 모바일 메뉴 */}
      {isMobile && (
        <div className="navbar-end">
          <label htmlFor="drawer-menu" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side z-50">
            <label htmlFor="drawer-menu" className="drawer-overlay"></label>
            <ul className="menu p-4 w-64 min-h-full bg-base-100 text-base-content">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="font-semibold">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
