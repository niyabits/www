import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    // Keys:
    // Font Size: fs
    // Space: sp

    fonts: {
      headings: "'Poppins', sans-serif",
      text: "'Inter', sans-serif",
    },

    colors: {
      gray900: "hsl(213, 21%, 10%)",
      gray800: "hsl(211, 39%, 23%)",
      gray700: "hsl(209, 34%, 30%)",
      gray200: "hsl(212, 33%, 89%)",
      gray100: "hsl(210, 36%, 98%)",
    },

    fontSizes: {
      // type-scale.com
      // Base Font Size: 16px
      // Scale: Major Second (1.125)
      fs1: "0.70rem",
      fs2: "0.79rem",
      fs3: "0.88rem",
      fs4: "1.00rem",
      fs5: "1.12rem",
      fs6: "1.26rem",
      fs7: "1.42rem",
      fs8: "1.60rem",
      fs9: "1.80rem",
      fs10: "2.02rem",
      fs11: "2.28rem",
      fs12: "2.56rem",
      fs13: "2.88rem",
      fs14: "3.24rem",
    },

    space: {
      sp1: "4px",
      sp2: "8px",
      sp3: "12px",
      sp4: "16px",
      sp5: "24px",
      sp6: "32px",
      sp7: "48px",
      sp8: "64px",
      sp9: "96px",
      sp10: "128px",
    },

    sizes: {
      sm: "800px",
      md: "1200px",
      lg: "1400px",

      sz1: "6px",
      sz2: "8px",
      sz3: "12px",
      sz4: "16px",
      sz5: "24px",
      sz6: "32px",
      sz7: "48px",
      sz8: "64px",
    },

    radii: {
      r1: "3px",
      r2: "6px",
      r3: "9px",
      r4: "12px",
    },
  },
});
