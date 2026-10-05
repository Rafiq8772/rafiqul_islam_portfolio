"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * "Rafiq" as a single continuous pen stroke: ascender loop, bowl, leg, a small
 * counter-loop, then a long sweeping tail that doubles as the underline.
 *
 * One path on purpose — the fill has to read as one pen travelling in a single
 * direction. Splitting it into stroke + underline made two segments fill at
 * once, which reads as filling "two ways".
 */
const MARK =
  "M10 52C6 38 8 19 15 10 18 6 24 7 24 13 24 20 18 25 12 26 20 27 26 32 30 40 32 45 30 49 26 48 22 47 22 41 27 39 35 36 45 38 54 42 64 46 76 49 88 48 95 47 101 46 106 43";

export function Signature() {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 115 65"
      className="h-[69px] w-[122px] tab:h-[65px] tab:w-[115px]"
      fill="none"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Rafiqul Islam signature"
    >
      {/* ghost of the full mark, always visible underneath */}
      <path d={MARK} stroke="#e6e6e6" />

      {reduced ? (
        <path d={MARK} stroke="currentColor" className="text-ink" />
      ) : (
        <motion.path
          d={MARK}
          stroke="currentColor"
          className="text-ink"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.6,
            ease: [0.4, 0, 0.2, 1],
            repeat: Infinity,
            repeatType: "loop", // restarts from empty: always fills one way
            repeatDelay: 2.2,
          }}
        />
      )}

      <circle cx="109" cy="42" r="2" fill="currentColor" className="text-ink" />
    </svg>
  );
}
