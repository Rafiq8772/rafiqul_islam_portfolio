/* Item pitch on the target is 58px: 22px gap, a 14px separator, 22px gap. */
const GAP = 22;

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  duration?: number;
  /** Whether the first item renders in ink; items alternate from there. */
  startInk?: boolean;
};

function Row({ items, startInk }: { items: string[]; startInk: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      style={{ gap: GAP, paddingRight: GAP }}
    >
      {items.map((item, i) => (
        <div key={item + i} className="flex items-center" style={{ gap: GAP }}>
          <h3
            className={`type-h3 whitespace-nowrap ${
              i % 2 === (startInk ? 0 : 1) ? "text-ink" : "text-muted"
            }`}
          >
            {item}
          </h3>
          <span className="flex w-[14px] shrink-0 justify-center">
            <span className="size-[5px] rounded-full bg-muted" />
          </span>
        </div>
      ))}
    </div>
  );
}

export function Marquee({
  items,
  reverse = false,
  duration = 34,
  startInk = true,
}: MarqueeProps) {
  return (
    <div className="flex h-[40px] items-center overflow-hidden">
      <div
        className="animate-marquee flex w-max"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <Row items={items} startInk={startInk} />
        <div aria-hidden>
          <Row items={items} startInk={startInk} />
        </div>
      </div>
    </div>
  );
}
