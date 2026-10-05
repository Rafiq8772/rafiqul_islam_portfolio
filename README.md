# Klio portfolio recreation

A pixel-accurate recreation of [klio.framer.website](https://klio.framer.website) in Next.js.

Built on Next 16.3.4 (App Router, Turbopack), React 19.2.8, Tailwind 4 and `motion` 13.

## Running

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Fidelity

Every section offset, section height and the total document height match the target exactly at
1440x900. Verified by running the same measurement script against both pages:

| section | target y / h | build y / h |
|---|---|---|
| home | 150 / 378 | 150 / 378 |
| about | 656 / 242.63 | 656 / 242.63 |
| projects | 1026.63 / 632 | 1026.63 / 632 |
| experience | 1786.63 / 954.39 | 1786.63 / 954.39 |
| education | 2869.02 / 626.58 | 2869.02 / 626.58 |
| skills | 3911.59 / 303 | 3911.59 / 303 |
| contact | 4342.59 / 236 | 4342.59 / 236 |
| **document** | **4816** | **4816** |

`SPEC.md` holds the full measured spec. `reference/klio-target.png` is a settled full-page capture of
the target for visual diffing.

### Verifying against the target

Both pages animate on scroll, so a capture taken at rest shows blank sections and displaced
geometry. Walk the page first, then measure or screenshot:

```js
const H = document.documentElement.scrollHeight;
for (let y = 0; y < H; y += 300) { window.scrollTo(0, y); await sleep(70); }
window.scrollTo(0, H); await sleep(600);
window.scrollTo(0, 0); await sleep(400);
```

This is the single biggest trap in the project: measuring the live Framer page at `scrollY = 0`
yields offsets that are wrong by up to 40px and implies section paddings that do not exist.

## Architecture

Everything renders on the server except one component.

| file | role |
|---|---|
| `app/page.tsx` | Server component. Holds the copy as local data and composes every section. |
| `app/globals.css` | Theme tokens plus the type ramp as Tailwind 4 `@utility` blocks, so tracking values live in one place. Also the marquee keyframes. |
| `app/layout.tsx` | Figtree via `next/font/google`, bound to `--font-figtree`. |
| `components/dock.tsx` | Fixed bottom nav. Server component — hover magnification is pure CSS. |
| `components/marquee.tsx` | Techstack rows. Server component, CSS keyframe, no JS. |
| `components/reveal.tsx` | Client. `whileInView` entrances, honoring `prefers-reduced-motion`. In the hero it fires on load, so the delays read as an entrance stagger. |
| `components/signature.tsx` | Client. Custom "R" flourish as one continuous path over a light-grey ghost, filling one way via `pathLength` then resetting. |

The marquee duplicates its row and translates `-50%`. The trailing gap lives inside each half rather
than as `gap-x` on the track, so the wrap lands on an item edge instead of mid-gap.

Project tiles keep a fixed clip box on hover and zoom their content inside it, then dim and reveal an
arrow badge — matching the target. The badge also slides in from 14px left. Stat and skill cards flip
from ink to mint, and their figure and label move from top/bottom into a centred stack.

That centring animates `flex-grow` on three spacers rather than using a fixed translate:
`justify-content` cannot be transitioned, and a fixed offset would mis-centre one-line labels
("User Research" is 19.6px tall where every other label is 39.2px). Letting the free space
redistribute centres any label height correctly — verified at 10.8/10.8 and 20.6/20.6.

The dock is server-rendered: hover scales the icon 24 -> 32px and lifts it above the pill in pure CSS,
matching the target, which uses per-item hover rather than neighbour magnification. Icons are Phosphor
regular in white, taken from the target.

Motion is deliberately minimal: entrances and the signature use `motion`, everything else is CSS. `prefers-reduced-motion`
disables the marquee, smooth scrolling and the reveal transforms.

### Recording the page as video

Animations that loop forever (the signature, the rotating name ring, the marquees) are invisible in a
screenshot. To watch them, or to diff motion against the target, record with Playwright — it captures
video natively via `recordVideo`, no extra tooling:

```js
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  recordVideo: { dir: "recordings", size: { width: 1440, height: 900 } },
});
```

Then slice frames into a contact sheet with ffmpeg to inspect an animation step by step:

```bash
ffmpeg -i clip.webm -vf "crop=140:110:265:135,fps=6,scale=280:220,tile=6x3" -frames:v 1 seq.png
```

`recordings/` is gitignored.

## Known gaps

- **Project thumbnails are placeholder blocks** at the correct dimensions, in the target's palette. The
  real assets belong to a paid CocoBasic template and were deliberately not lifted.
- **Most body copy is still Klio's placeholder text.** The name, page title, description and signature
  ring are Rafiqul Islam, but location ("San Francisco, CA, USA"), the companies (SuperCo, BlendXYZ,
  BassicCo), the schools (Stanford, Berkeley), and every stat and skill percentage are unchanged
  template copy. The email `rafiqul@email.com` and site `rafiqulislam.design` are invented placeholders.
  All of it lives in the data block at the top of `app/page.tsx`.
- **The hero portrait is derived.** `public/portrait-hero.jpg` is a bust crop of `public/portrait.png`
  (`crop=504:720:469:45`, scaled to 546x780). Replacing the source means redoing that crop.
- **Responsive** across Framer's own breakpoints (phone <810, tablet 810-1199, desktop >=1200). Desktop
  is pixel-exact; tablet and phone match the target's layout, type ramp and rhythm within a few px over
  a ~6000px page. See the table in `SPEC.md`.
- The dock sits 40px off the bottom. The live target reads 80px only because Framer's badge bar
  occupies the space beneath it.
