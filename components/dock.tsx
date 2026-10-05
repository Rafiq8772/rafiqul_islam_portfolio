/* Phosphor icons, regular weight (MIT) — the same set the target uses. */
const NAV = [
  {
    label: "Home",
    href: "#home",
    d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H48V120l80-80,80,80Z",
  },
  {
    label: "About",
    href: "#about",
    d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
  },
  {
    label: "Work",
    href: "#projects",
    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z",
  },
  {
    label: "Experience",
    href: "#experience",
    d: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0Z",
  },
  {
    label: "Education",
    href: "#education",
    d: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z",
  },
  {
    label: "Skills",
    href: "#skills",
    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm71.87,53.27L136,114.14V40.37A88,88,0,0,1,199.87,77.27ZM120,40.37v83l-71.89,41.5A88,88,0,0,1,120,40.37ZM128,216a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z",
  },
  {
    label: "Contact",
    href: "#contact",
    d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
  },
];

export function Dock() {
  return (
    <nav className="fixed bottom-[40px] left-1/2 z-50 flex h-[58px] w-[318px] -translate-x-1/2 items-center rounded-[27px] bg-dock px-[12px] py-[6px] shadow-dock">
      {NAV.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-label={item.label}
          className="group relative flex h-[46px] w-[42px] items-center justify-center"
        >
          {/* 24px at rest, 32px on hover lifted 12px (measured, not derived) — the same offset the target
              uses, which keeps the glyph inside the pill rather than breaking it. */}
          <svg
            viewBox="0 0 256 256"
            fill="currentColor"
            aria-hidden
            className="absolute left-1/2 top-1/2 size-[32px] text-white transition-transform duration-200 ease-out [transform:translate(-50%,-50%)_scale(0.75)] group-hover:[transform:translate(-50%,calc(-50%_-_12px))_scale(1)]"
          >
            <path d={item.d} />
          </svg>
        </a>
      ))}
    </nav>
  );
}
