import * as React from "react";

function WavyLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1995.77 338.39"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          x1={22.34}
          y1={191.85}
          x2={1338.81}
          y2={191.85}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0ff" />
          <stop offset={1} stopColor="#2affbd" />
        </linearGradient>
        <linearGradient
          id="c"
          y1={189.04}
          x2={1338.52}
          y2={189.04}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#008bff" />
          <stop offset={0.99} stopColor="#2abdbd" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={22.79}
          y1={188.3}
          x2={1338.03}
          y2={188.3}
          xlinkHref="#a"
        />
        <linearGradient
          id="b"
          x1={1337.27}
          y1={156.69}
          x2={1967.88}
          y2={156.69}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#2affbd" />
          <stop offset={1} stopColor="#0ff" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={1337.5}
          y1={103.97}
          x2={1942.15}
          y2={103.97}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#2abdbd" />
          <stop offset={1} stopColor="#008bff" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={1337.18}
          y1={79.28}
          x2={1995.77}
          y2={79.28}
          xlinkHref="#b"
        />
      </defs>
      <g data-name="Layer 2">
        <g
          data-name="Layer 1"
          fill="none"
          strokeMiterlimit={10}
          strokeWidth="2px"
        >
          <path
            d="M23.12 178.92s250.06-307 580.25 13.16 700.26 19 733.55-32.52c.33-.5.69-1 1.07-1.57"
            stroke="url(#a)"
          />
          <path
            d="M.66 192.34s247-219.1 601.55.77S1335 159.82 1335 159.82s1-.63 3-1.81"
            stroke="url(#c)"
          />
          <path
            d="M23.12 175.43s254.32-87.1 579.48 19.74S1337.7 158 1337.7 158"
            stroke="url(#d)"
          />
          <path d="M1337.7 158s411.09-191.61 629.42 66.2" stroke="url(#b)" />
          <path
            d="M1338 158c38.71-22.84 438.84-250.26 603.3 7"
            stroke="url(#e)"
          />
          <path
            d="M1338 158c39.33-55.27 398.26-323.11 657-1.14"
            stroke="url(#f)"
          />
        </g>
      </g>
    </svg>
  );
}

export default WavyLine;
