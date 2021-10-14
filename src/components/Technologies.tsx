import GraphqlLogo from "@/assets/logos/graphql";
import NodeLogo from "@/assets/logos/node";
import ReactLogo from "@/assets/logos/react";
import TypescriptLogo from "@/assets/logos/typescript";
import { styled } from "@/stitches";

const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "#logos": {
    marginBottom: "$sp3",
    display: "flex",
    alignItems: "baseline",
    svg: {
      filter: "grayscale(100%)",
      transition: "filter .2s ease-in",

      "&:hover": {
        filter: "grayscale(0%)",
        transition: "filter .2s ease-out",
      },
    },
  },

  "#tech-text": {
    marginTop: "$sp5",
    span: {
      marginRight: "$sp4",
      "&:not(:last-of-type)": {
        "&:after": {
          content: ",",
        },
      },
    },
  },
});

const Tech = () => {
  return (
    <Container>
      <h1>Technologies</h1>

      <div id="logos">
        <TypescriptLogo />
        <ReactLogo />
        <GraphqlLogo />
        <NodeLogo />
      </div>

      <div id="tech-text">
        <span>TypeScript</span>
        <span>React</span>
        <span>GraphQL</span>
        <span>Node.js</span>
        <span>Next.js</span>
        <span>CSS</span>
      </div>

      <div id="tech-text">
        <span>Arch Linux</span>
        <span>Neovim</span>
        <span>Git</span>
        <span>Visual Studio Code</span>
      </div>

      <div id="tech-text">
        <span>Figma</span>
        <span>Adobe XD</span>
        <span>Adobe Photoshop</span>
      </div>
    </Container>
  );
};

export default Tech;
