# Klio recreation spec

Measured from https://klio.framer.website at 1440x900 (1425px content viewport, 4816px document height).

> **Measure the target scrolled, not at rest.** Framer applies scroll-linked transforms, so
> `getBoundingClientRect()` on anything below the fold is displaced at `scrollY = 0`. Every number
> here was taken after walking the full page and returning to the top. A first pass taken at rest
> produced offsets that were wrong by up to 40px and implied section paddings and label offsets that
> do not exist. `reference/klio-target.png` is a settled full-page capture for visual diffing.

## Sticky section labels
Every left-rail label is `position: sticky; top: 30px`, pinning at viewport y=30 and releasing when its
section scrolls out. Measured on the target: About tracks 56, 30, 30, -21, -121, -221 at scrollY
600/700/800/900/1000/1100.

**`overflow-x: hidden` on `html` or `body` silently kills this** — it makes them scroll containers, so
sticky descendants never pin. Do not clip page overflow that way; size the marquee so it does not
overflow instead.

## Grid
- Content wrapper: 880px, centered (x=272.5 at a 1425px viewport)
- Two 440px halves. The left half holds the section label, capped at 352px, which renders identically
  to a 352 / 88 gutter / 440 model. The right half starts at the page's horizontal centre.
- Hero starts y=150. Uniform 128px gap between every section.
- No section has a top border or top padding, and no label is offset from its content.

## Color
| token | value | use |
|---|---|---|
| ink | `#222222` | primary text, stat/skill cards |
| muted | `#909090` | meta text, dimmed marquee items |
| dockLabel | `#A8A8A8` | dock nav labels |
| mint | `#4DB8AB` | hero portrait, availability dot |
| hairline | `rgba(144,144,144,0.2)` | separators *between* Experience and Education entries |
| dockBg | `#D6D6D6` | floating dock pill |

## Type — Figtree throughout
| role | size / line-height | weight | tracking |
|---|---|---|---|
| section label (h2) | 14 / 19.6 | 500 | -0.28 |
| heading (h3) | 20 / 26 | 600 | -0.4 |
| stat figure (h4) | 32 / 35.2 | 600 | -0.64 |
| body | 16 / 27.2 | 500 | -0.32 |
| meta | 14 / 19.6 | 500 | -0.28 |
| contact line | 15 / 16.5 | 600 | -0.3 |
| dock label | 12 | 400 | normal |

Defined once as `@utility` blocks in `app/globals.css`. Hero h1 is two-tone: the name clause in ink on
its own line, the remainder in muted. 20/26, 600, -0.4, capped at 352px.

## Section anchors (settled)
| section | y | height |
|---|---|---|
| home | 150 | 378 |
| about | 656 | 242.63 |
| projects | 1026.63 | 632 |
| experience | 1786.63 | 954.39 |
| education | 2869.02 | 626.58 |
| techstack | 3623.59 | 160 |
| skills | 3911.59 | 303 |
| contact | 4342.59 | 236 |

Document height 4816.

## Components
- **Hero portrait**: 182x260, radius 32, mint. "LUKE STONE" rings a circle to its right — a 152.67px
  square whose centre sits at roughly (939, 293). Note `textPath` does not wrap: keep `startOffset`
  at 0 and rotate the ring, or glyphs past the path end are silently dropped.
  The ring **turns continuously**, clockwise, about 12s per revolution. Letters rotate rigidly with it,
  so they read upside down at the bottom of the circle.
- **Signature**: ~80x65. Two layers — a permanent light-grey (`#e6e6e6`) ghost of the whole mark, and
  an ink stroke drawn over it. The underline draws first, the cursive loop follows, both hold, then
  retract to nothing and repeat. Cycle is roughly 8s and runs forever; it is not a one-shot entrance.
- **Dock**: fixed bottom-centre, 318x58 (= 12 + 7x42 + 12 wide, 6 + 46 + 6 tall), radius 27, bg dockBg,
  shadow `0 0.602187px 0.602187px -1.25px rgba(0,0,0,.18), 0 2.28853px 2.28853px -2.5px rgba(0,0,0,.16), 0 10px 10px -3.75px rgba(0,0,0,.063)`.
  Icons are **Phosphor regular, filled white** — they read as dark at full-page scale but are white up
  close on the grey pill. 24px at rest; on hover the icon scales to 32px and lifts **12px**, which keeps
  the glyph 4px inside the pill's top edge (measure this, do not derive it from the transform matrix —
  the matrix implies 16px and that pushes the glyph out). Items carry `transition: all`
  and `transform: none` at rest, so this is per-item CSS hover, not macOS-style neighbour magnification.
  The target shows a text label above the hovered icon; this build omits it by request.
  The live target sits 80px off the bottom only because Framer's badge bar occupies the space below it;
  this build uses 40px.
- **Project grid** (440 wide, 16px gutter): 200x200 / 224x416 spanning two rows / 200x200 / 440x200.
  Radius 32, `cursor: pointer`.
  **Hover is not a grow.** The tile's clip box stays 200x200; the *content inside* scales to 218x220,
  a `rgba(0,0,0,0.4)` dim fades in over it, and a 48x48 `rgba(255,255,255,0.1)` circular badge holding
  an 18px arrow fades in at inset 29px right / 30px top. This build slides that badge in from 14px
  left of its resting position (a local addition, not in the target). Measuring the wrong element in the chain makes
  this look like the tile itself growing.
- **Stat / skill card hover**: background `rgb(34,34,34)` -> `rgb(171,220,209)`, size and white text
  unchanged, no transform. This build additionally moves the figure and label from top/bottom into a
  centred stack on hover (a local addition, not in the target).
- **Stat + skill cards**: 136x144, radius 32, padding 22, bg ink, white text. 16px horizontal gutter
  (152px pitch), 15px vertical gutter — 144 + 15 + 144 = 303 is exactly the Skills section height.
- **Experience / Education entry**: h3, then meta at +5 as **two lines** (organisation, then period —
  this is what makes the meta block 39.19px rather than 19.6px), then body at +30. Entries are
  separated by 47px, a 1px hairline, then 47px.
- **Techstack**: 4 marquee rows on a 40px pitch, alternating direction, items alternating ink/muted,
  58px item pitch (22px gap, 14px separator, 22px gap), fading out toward the right edge.

## Hero entrance
Framer marks only 4 nodes as appear-animated and the h1 is not split into per-word spans, so there is
no letter-level text animation — just a fade-and-rise stagger on load. This build reuses the `Reveal`
primitive (its `whileInView` fires immediately for in-viewport content) with delays of
0.1 portrait, 0.28 h1, 0.45 arc, 0.55 contact lines.

Two hero animations are **continuous loops, not entrances** — easy to miss from screenshots, and only
visible by recording the page (see README):
- the signature draw/retract cycle
- the rotating name ring

## Responsive
Framer breakpoints, from the target's image `sizes`: desktop >=1200, tablet 810-1199, phone <810.

| | phone (375 client) | tablet (795 client) | desktop |
|---|---|---|---|
| gutters | 30px | 23px | centred 880 |
| columns | stacked, label 20px above content | two, left flexible / right 440 | 440 / 440 |
| section rhythm | 100px | 128px | 128px |
| h1 / h3 | 16 / 20.8 | 18 / 23.4 | 20 / 26 |
| body | 14 / 23.8 | 16 / 27.2 | 16 / 27.2 |
| stat figure | 28 / 30.8 | 32 / 35.2 | 32 / 35.2 |
| project tiles | full width, 300 / 300 / 416 / 191 tall | desktop grid | desktop grid |
| stat cards | 144x144, stacked | 136x144, row of 3 | 136x144, row of 3 |
| skills | 2 up | 3 up | 3 up |
| signature box | 69 tall | 65 tall | 65 tall |

Project DOM order is the phone stacking order; desktop uses explicit grid placement so it is unaffected.
The hero's left column must be `flex-1` from 810 up — pinning both columns at 440 overflows the 749px
tablet container by ~108px.

## Decisions
- Content: rebranded to **Rafiqul Islam**. Name, ring text, title and description are real; location,
  companies, schools, stats and skills are still Klio's placeholder copy and need replacing.
- Signature: custom "R" flourish, one continuous path, fills one way then resets (no retract)
- Motion: `motion` (Framer Motion) for scroll reveals only; the marquee is pure CSS
- Imagery: placeholder blocks at exact dimensions, echoing the target's palette
