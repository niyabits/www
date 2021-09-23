import * as React from "react";

function ReactDirImg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 150.1 157"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          x1={1.68}
          y1={7.09}
          x2={25.45}
          y2={21.74}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#299eff" />
          <stop offset={0.38} stopColor="#4ac4e0" />
          <stop offset={1} stopColor="#7dffb1" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={1.68}
          y1={50.06}
          x2={25.45}
          y2={64.7}
          xlinkHref="#a"
        />
        <linearGradient
          id="c"
          x1={1.68}
          y1={138.96}
          x2={25.45}
          y2={153.61}
          xlinkHref="#a"
        />
        <linearGradient
          id="d"
          x1={5.37}
          y1={98.28}
          x2={23.23}
          y2={110.01}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#7dffb1" />
          <stop offset={1} stopColor="#299eff" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={15.29}
          y1={92.79}
          x2={24.64}
          y2={92.79}
          xlinkHref="#a"
        />
        <linearGradient
          id="f"
          x1={46.75}
          y1={12.56}
          x2={75.78}
          y2={12.56}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.07} stopColor="#7dffb1" />
          <stop offset={1} stopColor="#299eff" />
        </linearGradient>
        <linearGradient
          id="g"
          x1={79.85}
          y1={12.56}
          x2={150.1}
          y2={12.56}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#299eff" />
          <stop offset={0.38} stopColor="#4ac4e0" />
          <stop offset={0.99} stopColor="#7dffb1" />
        </linearGradient>
        <linearGradient
          id="h"
          x1={46.75}
          y1={55.53}
          x2={112.94}
          y2={55.53}
          xlinkHref="#a"
        />
        <linearGradient
          id="i"
          x1={46.75}
          y1={144.43}
          x2={97.85}
          y2={144.43}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#7dffb1" />
          <stop offset={1} stopColor="#299eff" />
        </linearGradient>
        <linearGradient
          id="j"
          x1={46.75}
          y1={101.47}
          x2={83.14}
          y2={101.47}
          xlinkHref="#a"
        />
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            d="M27.92 22.33a2.79 2.79 0 01-2.8 2.79H2.79A2.78 2.78 0 010 22.33V2.79A2.79 2.79 0 012.79 0h7l2.79 4.19h12.54A2.79 2.79 0 0127.92 7z"
            fill="url(#a)"
          />
          <path
            data-name="folder"
            d="M27.92 65.3a2.79 2.79 0 01-2.8 2.79H2.79A2.79 2.79 0 010 65.3V45.76A2.79 2.79 0 012.79 43h7l2.79 4.19h12.54a2.79 2.79 0 012.8 2.81z"
            fill="url(#b)"
          />
          <path
            data-name="folder"
            d="M27.92 154.2a2.8 2.8 0 01-2.8 2.8H2.79A2.79 2.79 0 010 154.2v-19.54a2.79 2.79 0 012.79-2.79h7l2.79 4.19h12.54a2.79 2.79 0 012.8 2.79z"
            fill="url(#c)"
          />
          <path
            d="M15.29 88.11H6a2.68 2.68 0 00-2.68 2.67v21.37A2.68 2.68 0 006 114.82h16a2.67 2.67 0 002.67-2.67V97.46z"
            fill="url(#d)"
          />
          <path fill="url(#e)" d="M15.29 88.11v9.35h9.35" />
          <path
            stroke="url(#f)"
            fill="none"
            strokeMiterlimit={10}
            strokeWidth={6}
            d="M46.75 12.56h29.03"
          />
          <path
            stroke="url(#g)"
            fill="none"
            strokeMiterlimit={10}
            strokeWidth={6}
            d="M79.85 12.56h70.25"
          />
          <path
            stroke="url(#h)"
            fill="none"
            strokeMiterlimit={10}
            strokeWidth={6}
            d="M46.75 55.53h66.19"
          />
          <path
            stroke="url(#i)"
            fill="none"
            strokeMiterlimit={10}
            strokeWidth={6}
            d="M46.75 144.43h51.1"
          />
          <path
            stroke="url(#j)"
            fill="none"
            strokeMiterlimit={10}
            strokeWidth={6}
            d="M46.75 101.47h36.39"
          />
        </g>
      </g>
    </svg>
  );
}

export default ReactDirImg;
