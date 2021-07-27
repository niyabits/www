import * as React from "react";

function CopyIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M16.667 7.5h-7.5c-.92 0-1.667.746-1.667 1.667v7.5c0 .92.746 1.666 1.667 1.666h7.5c.92 0 1.666-.746 1.666-1.666v-7.5c0-.92-.746-1.667-1.666-1.667z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.167 12.5h-.834a1.667 1.667 0 01-1.666-1.667v-7.5a1.667 1.667 0 011.666-1.666h7.5A1.666 1.666 0 0112.5 3.333v.834"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CopyIcon;
