import { globalCss } from "@/stitches";

const globalStyles = globalCss({
  // CSS Reset and BoxSizing
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=PT+Sans&family=Poppins:wght@300;400;500&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap')",
  ],

  html: {
    boxSizing: "border-box",
  },

  "*, *:before, *:after": {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
    boxSizing: "inherit",
  },

  // Globals
  body: {
    fontSize: "16px",
    background: "$gray900",
    color: "$gray100",
    fontFamily: "$text",
  },

  "h1,h2,h3,h4": {
    fontFamily: "$headings",
  },

  // Sizes for headings
  // prettier-ignore
  h1: { fontSize: "$fs10" },
  h2: { fontSize: "$fs9" },
  h3: { fontSize: "$fs8" },
  h4: { fontSize: "$fs7" },

  section: {
    marginBottom: "$sp10",

    h1: {
      marginBottom: "$sp6",
    },
  },
});

export default globalStyles;
