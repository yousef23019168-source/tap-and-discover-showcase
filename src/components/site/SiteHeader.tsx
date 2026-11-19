import { useState } from "react";

const LINKS: [string, string][] = [
  ["#about", "About"],
  ["#problem", "Problem"],
  ["#solution", "Solution"],
  ["#explore", "Explore"],
  ["#how", "How it works"],
  ["#features", "Features"],
  ["#tech", "Technology"],
  ["#vision", "Vision"],
  ["#team", "Team"],
  ["#contact", "Contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap">
        <nav aria-label="Main">
          <a className="logo" href="#home" aria-label="E-Guard home">
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <path d="M20 3 34 8v11c0 9-6 15-14 18C12 34 6 28 6 19V8z" fill="#14b8a6" />
              <path
                d="M10 21h6l2-5 4 10 2-5h6"
                stroke="#0b2545"
                strokeWidth="2.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            E-Guard
          </a>
          <button id="menu" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            ☰
          </button>
          <ul id="links" className={open ? "open" : undefined} onClick={() => setOpen(false)}>
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
