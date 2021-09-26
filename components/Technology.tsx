import GraphqlLogo from "../assets/logos/graphql";
import NodeLogo from "../assets/logos/node";
import ReactLogo from "../assets/logos/react";
import TypescriptLogo from "../assets/logos/typescript";
import { styled } from "../stitches.config";

const TechCont = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5vh",

  p: {
    marginBottom: 60,
  },

  ".technology": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 48,

    span: {
      marginTop: 12,
    },
  },

  ".tech-row": {
    display: "flex",
    alignItems: "center",

    ".technology": {
      margin: "0 24px",
    },
  },
});

const Technology = () => {
  return (
    <TechCont>
      <h2>Core Technologies</h2>
      <p>A few core technologies I love to work with.</p>

      <div className="technology">
        <TypescriptLogo />
        <span>TypeScript</span>
      </div>
      <div className="tech-row">
        <div className="technology">
          <ReactLogo />
          <span>React</span>
        </div>

        <div className="technology">
          <GraphqlLogo />
          <span>GraphQL</span>
        </div>

        <div className="technology">
          <NodeLogo />
          <span>Node.js</span>
        </div>
      </div>
    </TechCont>
  );
};

export default Technology;
