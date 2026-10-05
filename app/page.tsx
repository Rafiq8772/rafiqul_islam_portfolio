import type { ReactNode } from "react";
import Image from "next/image";
import { Dock } from "@/components/dock";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { Signature } from "@/components/signature";

const CONTACT = {
  location: "San Francisco, CA, USA",
  email: { label: "rafiqul@email.com", href: "mailto:rafiqul@email.com" },
  site: { label: "rafiqulislam.design", href: "https://rafiqulislam.design" },
};

const ABOUT = [
  "My passion lies in the intersection of art and technology, creating visually captivating interfaces and elevating overall user digital experiences.",
  "Since obtaining my Computer Science Bachelor's Degree in 2012, I've gleaned a comprehensive grasp of the central tenets guiding competent interface design. This theoretical grounding endows me with the judgment necessary to conceive designs that efficaciously unite aesthetics and functionality.",
];

/**
 * DOM order is the mobile stacking order (300, 300, 416, 191 tall). The desktop
 * grid uses explicit placement, so it is unaffected by this ordering.
 */
const PROJECTS = [
  { alt: "abstract shape", mobile: "h-[300px]", cell: "tab:col-start-1 tab:row-start-1 tab:h-[200px] tab:w-[200px]", bg: "bg-[#a9dad4]" },
  { alt: "user experience", mobile: "h-[300px]", cell: "tab:col-start-1 tab:row-start-2 tab:h-[200px] tab:w-[200px]", bg: "bg-[#edebe2]" },
  { alt: "graphic example", mobile: "h-[416px]", cell: "tab:col-start-2 tab:row-start-1 tab:row-span-2 tab:h-[416px] tab:w-[224px]", bg: "bg-[#f2f0ec]" },
  { alt: "weather icons", mobile: "h-[191px]", cell: "tab:col-span-2 tab:col-start-1 tab:row-start-3 tab:h-[200px] tab:w-[440px]", bg: "bg-[#f0937b]" },
];

const EXPERIENCE = [
  {
    role: "Senior UX/UI Designer",
    org: "SuperCo",
    period: "2019 — Present",
    body: "Led the total overhaul of our main mobile app, subsequently resulting in a rise in user interaction over six months. Introduced a productive indoctrination tactic, thus reducing user desertion.",
  },
  {
    role: "Lead Product Designer",
    org: "BlendXYZ",
    period: "2017 — 2019",
    body: "Worked closely with the software team to adopt a mobile-first design strategy, enhancing the user experience on mobile devices and boosting engagement with the mobile app.",
  },
  {
    role: "UI/UX Designer",
    org: "BassicCo",
    period: "2014 — 2017",
    body: "Devised and executed inventive strategies like a fitness application and well-visited online shopping sites for diverse clients, enhancing their overall business to their delight.",
  },
];

const STATS = [
  { figure: "380+", label: "Projects Completed" },
  { figure: "420+", label: "Satisfied Clients" },
  { figure: "2K+", label: "Positive Reviews" },
];

const EDUCATION = [
  {
    role: "Master of Arts in Interaction Design",
    org: "Stanford University",
    period: "2012 — 2014",
    body: "Skilled in conducting qualitative user research, creating aesthetic web layouts, and visual design in general.",
  },
  {
    role: "Bachelor of Science in Computer Science",
    org: "University of California, Berkeley",
    period: "2008 — 2012",
    body: "Obtained a solid foundation in comprehensive software development and implementation.",
  },
  {
    role: "Diploma in Graphic Design",
    org: "San Francisco Design Institute",
    period: "2007 — 2008",
    body: "Mastered essential capabilities in visual creativity.",
  },
];

const TECHSTACK = [
  { items: ["Framer", "Affinity Designer", "Photoshop", "Illustrator", "Slack"], startInk: true, reverse: false, duration: 36 },
  { items: ["Affinity Photo", "Discord", "Figma", "Notion", "Jira"], startInk: false, reverse: true, duration: 44 },
  { items: ["After Effects", "Gimp", "Slack", "Sketch", "Framer"], startInk: true, reverse: false, duration: 40 },
  { items: ["Framer", "Affinity Designer", "Photoshop", "Illustrator", "Slack"], startInk: true, reverse: true, duration: 48 },
];

const SKILLS = [
  { figure: "80%", label: "User Interface Design" },
  { figure: "86%", label: "Interaction Design" },
  { figure: "76%", label: "User Research" },
  { figure: "72%", label: "Project Management" },
  { figure: "92%", label: "Design Leadership" },
  { figure: "78%", label: "User Centred Design" },
];

const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com", d: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2z M17.2 6.9h.01" },
  { name: "Dribbble", href: "https://www.dribbble.com", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M4 8.6c4.6.9 10.2.3 13.6-2.4 M3.6 13.6c5-1.3 10.9.4 13.7 4.9 M9 3.7c3.4 3.8 5.6 8.8 6.1 15" },
  { name: "Facebook", href: "https://www.facebook.com", d: "M14.5 8.5h2.2V5.6h-2.6c-2.2 0-3.6 1.4-3.6 3.7v2h-2.4v2.9h2.4V21h3.1v-6.8h2.3l.4-2.9h-2.7V9.6c0-.7.3-1.1 1-1.1z" },
  { name: "LinkedIn", href: "https://www.linkedin.com", d: "M5.5 8.8h2.9V21H5.5z M7 4a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 7 4z M11 8.8h2.8v1.7c.6-1 1.7-1.9 3.5-1.9 2.6 0 4.2 1.6 4.2 4.8V21h-2.9v-6.9c0-1.7-.7-2.6-2.1-2.6-1.3 0-2.2.9-2.2 2.6V21H11z" },
];

/**
 * Below 810 the label stacks above its content with a 20px gap. From 810 up it
 * becomes a left rail that sticks at viewport y=30 and releases with the section.
 */
function Section({
  id,
  label,
  children,
  className = "",
}: {
  id?: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`flex flex-col gap-[20px] tab:flex-row tab:gap-0 ${className}`}>
      <div className="tab:sticky tab:top-[30px] tab:flex-1 tab:self-start">
        <h2 className="type-label w-full text-ink tab:w-4/5">{label}</h2>
      </div>
      <div className="w-full tab:w-[440px] tab:shrink-0">{children}</div>
    </section>
  );
}

/** Shared by Experience and Education: 47px above the hairline, 47px below. */
function TimelineList({
  items,
}: {
  items: { role: string; org: string; period: string; body: string }[];
}) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.role}>
          {i > 0 && <div className="my-[47px] h-px w-full bg-hairline" />}
          <Reveal delay={i * 0.06}>
            <h3 className="type-h3 text-ink">{item.role}</h3>
            <p className="type-meta mt-[5px] text-muted">
              {item.org}
              <br />
              {item.period}
            </p>
            <p className="type-body mt-[30px] text-ink">{item.body}</p>
          </Reveal>
        </div>
      ))}
    </div>
  );
}

/**
 * At rest the figure sits at the top and the label at the bottom. On hover both
 * move into a centred stack.
 *
 * Done with three flexible spacers rather than a fixed translate: `justify-content`
 * cannot be transitioned, and a fixed offset would mis-centre the one-line labels
 * ("User Research" is 19.6px tall where the rest are 39.2px). Animating flex-grow
 * lets the free space redistribute itself, so any label height centres correctly.
 */
function StatCard({
  figure,
  label,
  className = "",
}: {
  figure: string;
  label: string;
  className?: string;
}) {
  const spacer = "transition-[flex-grow] duration-300 ease-out";
  return (
    <div
      className={`group/card flex h-[144px] cursor-pointer flex-col rounded-[32px] bg-ink p-[22px] transition-colors duration-300 hover:bg-[#abdcd1] ${className}`}
    >
      <div className={`grow-0 ${spacer} group-hover/card:grow`} />
      <h4 className="type-stat text-white">{figure}</h4>
      <div className={`min-h-[4px] grow ${spacer} group-hover/card:grow-0`} />
      <p className="type-meta text-white">{label}</p>
      <div className={`grow-0 ${spacer} group-hover/card:grow`} />
    </div>
  );
}

function ContactLines({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="type-contact text-ink">{CONTACT.location}</p>
      <p className="type-contact mt-[4px] text-ink">
        <a href={CONTACT.email.href} className="underline underline-offset-[3px]">
          {CONTACT.email.label}
        </a>
      </p>
      <p className="type-contact mt-[4px] text-ink">
        <a href={CONTACT.site.href} className="underline underline-offset-[3px]">
          {CONTACT.site.label}
        </a>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-[880px] px-[30px] pt-[30px] pb-[100px] tab:px-[23px] tab:pt-[150px] tab:pb-[138px] desk:px-0">
        {/* Hero. Stacking the two columns on mobile yields the target's order:
            signature, contact, portrait, h1. */}
        <section id="home" className="flex flex-col tab:h-[378px] tab:flex-row">
          <div className="tab:flex-1">
            <Signature />
            <Reveal delay={0.55} className="mt-[34px] tab:mt-[38px]">
              <ContactLines />
            </Reveal>
          </div>

          <div className="mt-[45px] tab:mt-0 tab:w-[440px] tab:shrink-0">
            <div className="relative">
              <Reveal delay={0.1}>
                <div className="relative h-[260px] w-[182px] overflow-hidden rounded-[32px] bg-mint">
                  <Image
                    src="/portrait-hero.jpg"
                    alt="Rafiqul Islam"
                    fill
                    sizes="182px"
                    priority
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal
                delay={0.45}
                className="absolute left-[150.65px] top-[66.67px] size-[152.67px]"
              >
                <svg viewBox="0 0 153 153" aria-hidden className="animate-ring size-full text-ink">
                  <defs>
                    <path
                      id="arc"
                      d="M76.5 12.5a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
                      fill="none"
                    />
                  </defs>
                  <text
                    fill="currentColor"
                    fontSize="13"
                    fontWeight="500"
                    letterSpacing="21"
                    transform="rotate(-52 76.5 76.5)"
                  >
                    {/* startOffset stays at 0: textPath does not wrap, so anything
                        past the path end is dropped. Rotate the ring instead. */}
                    <textPath href="#arc" startOffset="0%">
                      RAFIQUL ISLAM
                    </textPath>
                  </text>
                </svg>
              </Reveal>
            </div>
            <Reveal delay={0.28} className="mt-[40px]">
              <h1 className="type-h3 w-full tab:w-[352px]">
                <span className="block text-ink">
                  I&rsquo;m Rafiqul Islam &mdash; product designer
                </span>
                <span className="text-muted">
                  focusing on pixel precise digital products with much love
                </span>
              </h1>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <Section id="about" label="About" className="mt-[100px] tab:mt-[128px]">
          <Reveal>
            <p className="type-body text-ink">{ABOUT[0]}</p>
            <p className="type-body mt-[25px] text-ink">{ABOUT[1]}</p>
          </Reveal>
        </Section>

        {/* Projects */}
        <Section id="projects" label="Projects" className="mt-[100px] tab:mt-[128px]">
          <div className="grid grid-cols-1 gap-[16px] tab:grid-cols-[200px_224px] tab:grid-rows-[200px_200px_200px]">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.alt} delay={i * 0.08} className={`${p.mobile} ${p.cell}`}>
                {/* The target keeps the tile's clip box fixed and zooms the content
                    inside it, then dims and reveals an arrow badge. */}
                <div
                  role="img"
                  aria-label={p.alt}
                  className="group relative size-full cursor-pointer overflow-hidden rounded-[32px]"
                >
                  <div
                    className={`size-full transition-transform duration-500 ease-out group-hover:scale-[1.09] ${p.bg}`}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute right-[29px] top-[30px] flex size-[48px] -translate-x-[14px] items-center justify-center rounded-full bg-white/10 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                    <svg viewBox="0 0 256 256" fill="currentColor" className="size-[18px] text-white">
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                    </svg>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" label="Experience" className="mt-[100px] tab:mt-[128px]">
          <TimelineList items={EXPERIENCE} />
          <div className="mt-[75px] flex flex-col gap-[16px] tab:flex-row">
            {STATS.map((s, i) => (
              <Reveal key={s.figure} delay={i * 0.08}>
                <StatCard {...s} className="w-[144px] tab:w-[136px]" />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" label="Education" className="mt-[100px] tab:mt-[128px]">
          <TimelineList items={EDUCATION} />
        </Section>

        {/* Techstack. From 810 up the right column starts at the page's horizontal
            centre, so the rows run to the viewport edge. */}
        <Section label="Techstack" className="mt-[100px] tab:mt-[128px]">
          <div className="h-[160px] w-full overflow-hidden [mask-image:linear-gradient(to_right,black_0,black_62%,transparent_100%)] tab:w-[calc(50vw-24px)]">
            {TECHSTACK.map((row, i) => (
              <Marquee key={i} {...row} />
            ))}
          </div>
        </Section>

        {/* Skills — 2 up on mobile, 3 up from 810. */}
        <Section id="skills" label="Skills" className="mt-[100px] tab:mt-[128px]">
          <div className="grid grid-cols-2 gap-[16px] tab:grid-cols-3 tab:gap-y-[15px]">
            {SKILLS.map((s, i) => (
              <Reveal key={s.figure} delay={i * 0.08}>
                <StatCard {...s} className="w-full tab:w-[136px]" />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" label="Contact" className="mt-[100px] tab:mt-[128px]">
          <Reveal>
            <h3 className="type-h3 text-ink">
              Looking to start a project or you need consultation? Feel free to
              contact me.
            </h3>
            <ContactLines className="mt-[30px]" />
            <div className="mt-[40px] flex items-center gap-[20px]">
              <span className="size-[8px] rounded-full bg-mint" />
              <p className="type-contact text-ink">Available for work</p>
            </div>
            <div className="mt-[20px] flex items-center gap-[16px]">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink transition-opacity hover:opacity-60"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-[20px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </Reveal>
        </Section>

        <p className="type-meta mt-[80px] text-muted">
          © 2026 — Framer template by{" "}
          <a href="https://cocobasic.lemonsqueezy.com" className="underline">
            CocoBasic
          </a>
        </p>
      </main>

      <Dock />
    </>
  );
}
