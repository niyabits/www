import { styled } from "@/stitches";
import React from "react";

const Container = styled("button", {
  padding: "$sp2 $sp5",
  borderRadius: "$r2",
  cursor: "pointer",
  background:
    "linear-gradient(270deg, #34FFFF 0%, #34FFCE 0.01%, #299EFF 102.92%)",

  position: "relative",
  overflow: "hidden",

  span: {
    color: "black",
    position: "relative",
    transition: "color 0.6 cubic-bezier(0.53, 0.21, 0, 1)",
  },

  "&:before": {
    content: "",
    position: "absolute",
    top: "50%",
    left: 0,
    borderRadius: "$r2",
    transform: "translate(-100%, -50%)",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(270deg, #ACFFFF 0%, #34FFCE 0.01%, #56B2FF 102.92%)",
    transition: "transform 0.6s cubic-bezier(0.53, 0.21, 0, 1)",
  },

  "&:hover": {
    "&:before": {
      transform: "translate(0, -50%) scale(1.001)",
    },
  },
});

const Button: React.FC<{}> = ({ children }) => {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  );
};

export default Button;
